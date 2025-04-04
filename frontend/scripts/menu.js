document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuBtnIcon = document.querySelector(".menuBtn");
    const menuBtnIcon2 = document.querySelector(".menuBtn2");

    // Función para mostrar/ocultar el menú
    function toggleMenu() {
        menu.classList.toggle("active"); // Alterna la clase "active" en el menú
        document.body.classList.toggle("body-menu-active"); // Bloquea/desbloquea el scroll del fondo

        // Cambiar el ícono del botón
        if (menu.classList.contains("active")) {
            menuBtnIcon2.classList.remove("fa-bars");
            menuBtnIcon2.classList.add("fa-xmark");
        } else {
            menuBtnIcon2.classList.remove("fa-xmark");
            menuBtnIcon2.classList.add("fa-bars");
        }
    }

    // Evento para manejar el clic en el botón del menú
    menuBtnIcon.addEventListener("click", toggleMenu);
    menuBtnIcon2.addEventListener("click", toggleMenu);

    // Cerrar el menú si se hace clic fuera de él
    menuBtnIcon2.addEventListener("click", function (event) {
        if (
            !menu.contains(event.target) &&
            !menuBtnIcon.contains(event.target) &&
            !menuBtnIcon2.contains(event.target)
        ) {
            if (menu.classList.contains("active")) {
                menu.classList.remove("active"); // Cierra el menú
                document.body.classList.remove("body-menu-active"); // Restaura el scroll del fondo

                // Restablecer el ícono del botón
                menuBtnIcon2.classList.remove("fa-xmark");
                menuBtnIcon2.classList.add("fa-bars");
            }
        }
    });
});
