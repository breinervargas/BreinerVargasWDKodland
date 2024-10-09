document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos los elementos necesarios
    const burgerButton = document.querySelector('.nav__burger');
    const navMenu = document.querySelector('.nav__menu');
    
    // Función para togglear el menú
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
    };

    // Event listener para el botón hamburguesa
    burgerButton.addEventListener('click', toggleMenu);

    // Cerrar el menú cuando se hace click en un enlace
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Cerrar el menú cuando se hace click fuera de él
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickInsideBurger = burgerButton.contains(event.target);
        
        if (!isClickInsideMenu && !isClickInsideBurger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});