document.addEventListener('DOMContentLoaded', function() {
    // Para el menú de categorías
    const catMenu = document.querySelector('.cat');
    if (catMenu) {
        catMenu.addEventListener('click', function(e) {
            if (window.matchMedia('(hover: none)').matches) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    }
    
    // Para el menú de perfil
    const perfilMenu = document.querySelector('.perfil');
    if (perfilMenu) {
        perfilMenu.addEventListener('click', function(e) {
            if (window.matchMedia('(hover: none)').matches) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    }
    
    // Para el menú de carrito
    const bagMenu = document.querySelector('.bag');
    if (bagMenu) {
        bagMenu.addEventListener('click', function(e) {
            if (window.matchMedia('(hover: none)').matches) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    }
});