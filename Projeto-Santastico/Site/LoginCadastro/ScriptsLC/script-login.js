function analisarLogin() {
    var ax_email = email.value;
    var ax_senha = senha.value;
    email.classList.remove('error');
    senha.classList.remove('error');

    if (ax_email == '' || ax_senha == '') {
        alert('preencha todos os campos');
    } else if (ax_email != 'Termosense' && ax_senha != '1234') {
        email.classList.add('error');
        senha.classList.add('error');
    } else {
        window.location.href = "../Home/perfil-pt.html";
    }
}

function mostrar() {
    sem_cadastro.style.display = 'none';
    main_cadastro.style.display = 'block';

}

function registro() {
    alert(`${aniversario.value}`);
}