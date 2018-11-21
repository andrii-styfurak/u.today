const app = new Vue({
  el: "#app",
  data: {
    currency: "usd",
    activeSearch: false,
    activeModal: null,
    showMore: false
  },
  methods: {
    tabsSub(e) {
      e.target.parentNode.classList.toggle("tabs__item--sub-open");
    },
    accordionOpen(e) {
      e.target.parentNode.classList.toggle("accordion--open");
    },
    selectOpen(e) {
      let select = e.target.parentNode.classList;
      let isСurrent = select.contains("select--open");
      let currentOpenSelect = document.querySelector(".select--open");

      currentOpenSelect && !isСurrent && (currentOpenSelect.classList.remove("select--open"));

      select.toggle("select--open");
    },
    share(tg, tw, fb, e) {
      let shareBox = document.getElementById("share-post");
      let bodyRect = document.body.getBoundingClientRect();
      let elemRect = e.target.getBoundingClientRect();

      let tgLink = document.getElementById("share-post-link-tg")
      let twLink = document.getElementById("share-post-link-tw")
      let fbLink = document.getElementById("share-post-link-fb")

      tgLink.setAttribute("href", tgLink);
      twLink.setAttribute("href", twLink);
      fbLink.setAttribute("href", fbLink);

      let offset = {
        top: elemRect.top - bodyRect.top,
        left: elemRect.left - bodyRect.left
      }

      shareBox.style.top = offset.top + "px";
      shareBox.style.left = offset.left + "px";


    },
    shareHide() {
      let shareBox = document.getElementById("share-post");
      shareBox.style.top = "-9999px";
    }
  }
});