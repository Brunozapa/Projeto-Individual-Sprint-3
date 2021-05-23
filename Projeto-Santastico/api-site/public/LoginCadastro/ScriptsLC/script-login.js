function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.idUsuario;
                sessionStorage.primeiro_nome_usuario_meuapp = json.primeiroNome;
                sessionStorage.segundo_nome_usuario_meuapp = json.segundoNome;
                sessionStorage.foto_perfil_usuario_meuapp = json.fkJogador;
                sessionStorage.email_usuario_meuapp = json.email;
                sessionStorage.idioma_usuario_meuapp = json.idioma;
                sessionStorage.pais_usuario_meuapp = json.pais;
                sessionStorage.aniversario_usuario_meuapp = json.aniversario;

                window.location.href = '../Home/perfil-pt.html';
            });

        } else {

            console.log('Erro de login!');

            id_email.classList.add('error');
            id_senha.classList.add('error');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    erro_login.style.visibility = 'hidden';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    erro_login.style.visibility = 'visible';
    erro_login.innerHTML = resposta;
}




function mostrar() {
    sem_cadastro.style.display = 'none';
    main_cadastro.style.display = 'block';
    window.location.href = '#cadastro';
}