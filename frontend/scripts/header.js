document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
