document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    window.addEventListener("scroll", () => {
        header.classList.toggle("minimized", window.scrollY > 50);
    });

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});