let menuToggleBtn = document.querySelector("[menu-toggle-btn]");
let navbar = document.querySelector(".navbar");


menuToggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});