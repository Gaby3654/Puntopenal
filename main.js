let btn = document.getElementById("menu-toggler");
let navMenu = document.getElementById("nav-menu");

function menu() {
    if (navMenu.classList.contains("menu-close")) {
        navMenu.classList.remove("menu-close");
        navMenu.classList.add("menu-open");
    } else {
        navMenu.classList.remove("menu-open");
        navMenu.classList.add("menu-close");
    }
}
btn.addEventListener("click", menu);