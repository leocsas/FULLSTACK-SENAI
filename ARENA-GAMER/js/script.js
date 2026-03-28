document.addEventListener('DOMContentLoaded', function () {
    const elementoCarrossel = document.querySelector('#meuCarrossel');
    
    if (elementoCarrossel) {
        new bootstrap.Carousel(elementoCarrossel, {
            interval: 4000,
            wrap: true,
            touch: true
        });
    }
});