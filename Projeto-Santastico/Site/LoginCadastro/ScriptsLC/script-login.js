function analisarLogin() {
    var ax_email = email.value;
    var ax_senha = senha.value;
    email.classList.remove('error');
    senha.classList.remove('error');

    if (ax_email == '' || ax_senha == '') {
        alert('preencha todos os campos');
    }
    if (ax_email != 'Termosense') {
        email.classList.add('error');
    }
    if (ax_senha != '1234') {
        senha.classList.add('error');
    }
}

function mostrar() {
    sem_cadastro.style.display = 'none';
    main_cadastro.style.display = 'block';

}