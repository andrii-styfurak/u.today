(function ($) {

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

})(jQuery);