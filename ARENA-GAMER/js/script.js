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

const contador = document.getElementsByClassName('contador-carrinho');
const adicionar = document.getElementsByClassName('botao-carrinho');
const mensagem = document.getElementsByClassName('mensagem-sucesso');

let count = 0;

const updateContador = () => {
    contador[0].innerHTML = count;
};

for (let i = 0; i < adicionar.length; i++) {
    adicionar[i].addEventListener('click', () => {
    count += 1;
    updateContador();

    mensagem[0].style.display = 'block';

    setTimeout(() => {
        mensagem[0].style.display = 'none';
    }, 1500);
});
}