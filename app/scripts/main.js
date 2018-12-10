(function ($) {

  //
  // Header and mobile menu
  //

  const $header = $(".header"),
    $headerContainer = $(".header__container"),
    $headerBurger = $(".header__burger"),
    $mobileMenuCover = $(".mobile-menu-cover"),
    $headerBtnSearch = $(".header__btn-search"),
    $headerSearch = $(".header__search"),
    $headerSearchBtnClose = $(".header__search-close"),
    $headerSearchInput = $(".header__search-input"),
    $headerNavList = $(".header__nav-list");

  var firstHeaderLoad = true;

  function toggleMobileMenu() {
    $header.toggleClass("header--mobile-menu");
    $headerBurger.toggleClass("btn--cross");
    $mobileMenuCover.fadeToggle(280);
  }

  function toggleHeaderSearch(e) {
    e.preventDefault();
    $headerNavList.toggleClass("visibility-hidden");
    $headerSearch.fadeToggle(180);
    $headerSearchInput.focus();
  }

  function stickyHeader(e) {
    let distanceToTop = $header[0].getBoundingClientRect().top;
    let isScrollDown = this.oldScroll > this.scrollY;
    let isMobileMenuOpen = $header.hasClass("header--mobile-menu");

    if (distanceToTop <= 0) {
      if (isScrollDown || firstHeaderLoad) {
        firstHeaderLoad = false;
        $headerContainer.addClass("header__container--sticky");
      }
    } else {
      $headerContainer.removeClass("header__container--sticky");
    }

    if (isScrollDown) {
      $headerContainer.addClass("header__container--sticky-show");
    } else {
      if (!isMobileMenuOpen) {
        $headerContainer.removeClass("header__container--sticky-show");
      }
    }

    this.oldScroll = this.scrollY;
  }

  stickyHeader();

  $headerBurger.on("click", toggleMobileMenu);
  $headerBtnSearch.on("click", toggleHeaderSearch)
  $headerSearchBtnClose.on("click", toggleHeaderSearch);
  $(window).on("scroll", stickyHeader);

  //
  // Accordion
  //

  $(".accordion__title").on("click", function () {
    $(this).parent().toggleClass("accordion--open");
  });

  //
  // Select
  //

  $(".select__btn").on("click", function () {
    let select = event.target.parentNode.classList;
    let isСurrent = select.contains("select--open");
    let currentOpenSelect = document.querySelector(".select--open");

    currentOpenSelect && !isСurrent && (currentOpenSelect.classList.remove("select--open"));

    select.toggle("select--open");
  });

  //
  // Modals
  //

  function openModal() {
    var modalId = $(this).data("modal");
    $("#" + modalId).addClass("modal--open");

    setTimeout(function () {
      $("#" + modalId).addClass("modal--fadeIn");
    }, 50);
  }

  function closeModal() {
    var elem = this;
    $(elem).removeClass("modal--fadeIn");

    setTimeout(function () {
      $(elem).removeClass("modal--open");
    }, 300);
  }

  function closeBtnModal() {
    var elem = this;
    $(elem).parents(".modal").removeClass("modal--fadeIn");

    setTimeout(function () {
      $(elem).parents(".modal").removeClass("modal--open");
    }, 300);
  }

  $("[data-modal]").on("click", openModal);
  $(".modal").on("click", closeModal);
  $("[data-close-modal]").on("click", closeBtnModal);
  $(".modal__item").on("click", function () {
    event.stopPropagation();
  });

  var currencyValue = $(".currencies__currency span");

  $("[data-set-currency]").on("click", setCurrency);

  function setCurrency() {
    var currency = $(this).data("set-currency");

    switch (currency) {
      case "usd":
        console.log("set usd")
        break;

      case "eur":
        console.log("set eur")
        break;

      case "rub":
        console.log("set rub")
        break;
    }

    currencyValue.text(currency);
  }

  //
  // Tabs
  //

  $("[data-active-tab").on("click", function () {
    var idTab = $(this).data("active-tab");

    $("[data-active-tab]").removeClass("tabs__item--active");
    $(this).addClass("tabs__item--active");

    $("[data-tab]").removeClass("active");
    $("[data-tab=" + idTab + "]").addClass("active");
  });

})(jQuery);

//
// Share
//

function share(tg, tw, fb) {
  let shareBox = document.getElementById("share-post");
  let bodyRect = document.body.getBoundingClientRect();
  let elemRect = event.target.getBoundingClientRect();

  let tgLink = document.getElementById("share-post-link-tg");
  let twLink = document.getElementById("share-post-link-tw");
  let fbLink = document.getElementById("share-post-link-fb");

  tgLink.setAttribute("href", tg);
  twLink.setAttribute("href", tw);
  fbLink.setAttribute("href", fb);

  let offset = {
    top: elemRect.top - bodyRect.top,
    left: elemRect.left - bodyRect.left
  }

  shareBox.style.top = offset.top + "px";
  shareBox.style.left = offset.left + 34 + "px";
}

function shareHide() {
  let shareBox = document.getElementById("share-post");
  shareBox.style.top = "-9999px";
}

//
// Show more buttons
//

function showMore(elem) {
  event.target.classList.toggle("btn--arrow-up-before");
  document.querySelector(elem).classList.toggle(elem.slice(1) + "--open");
}

function tabsSub() {
  event.target.parentNode.classList.toggle("tabs__item--sub-open");
}