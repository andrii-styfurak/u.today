const app = new Vue({
  el: "#app",
  data: {
    currency: 'usd',
    activeDropdown: null
  }
});

// const dropdowns = document.querySelectorAll(".dropdown");

// if (dropdowns) {
//   dropdowns.forEach(dropdown => dropdown.addEventListener("click", dropdownHandler))
// }

// function dropdownHandler(e) {
//   this.classList.toggle("dropdown--open")
// }