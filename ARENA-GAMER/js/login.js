const formLogin = $('#form-login');
const mensagemLogin = $('#mensagem-login');

function mostrarMensagem(texto, tipo, redirecionar = false) {
    mensagemLogin.stop(true, true);

    mensagemLogin
        .removeClass('sucesso erro mostrar')
        .addClass(tipo)
        .text(texto)
        .css('display', 'block');

    setTimeout(() => {
        mensagemLogin.addClass('mostrar');
    }, 10);

    setTimeout(() => {
        mensagemLogin.removeClass('mostrar');

        setTimeout(() => {
            mensagemLogin.css('display', 'none');

            if (redirecionar) {
                window.location.href = "index.html";
            }
        }, 400);
    }, 1800);
}

formLogin.on('submit', function(event) {
    event.preventDefault();

    const email = $('#email').val().trim().toLowerCase();
    const senha = $('#senha').val().trim();

    if (email === "admin@gmail.com" && senha === "admin") {
        mostrarMensagem('Login realizado com sucesso!', 'sucesso', true);
    } else {
        mostrarMensagem('Usuário ou senha incorretos!', 'erro');
    }
});