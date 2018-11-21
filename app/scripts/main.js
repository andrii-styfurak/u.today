const app = new Vue({
  el: "#app",
  data: {
    currency: "usd",
    activeSearch: false,
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
    }
  }
});