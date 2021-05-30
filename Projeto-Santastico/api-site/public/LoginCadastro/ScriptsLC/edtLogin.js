var idioma = '';

function slcIdioma() {
    idioma = idIdioma.value;

    if (idioma == 'pt') {
        form_login.innerHTML = `
        <span>
        Email <br>
        <input type="email" placeholder="Digite seu email" name="email" id="id_email">
        </span>
        <span>
        Senha <br>
        <input type="password" placeholder="Digite sua senha" name="senha" id="id_senha">
        </span>
        <div id="erro_login" class="esq-senha"></div>
        <div class="div-btn-entrar">
        <button id="btn_entrar" class="btn-entrar">Avançar</button>
        </div>`;

        sem_cadastro.innerHTML = `
        <div class="sem-cadastro-txt" style="display: block;">
        <h1>Junte-se ao Meu Santos!</h1> Aqui o torcedor está mais proximo do seu time! <br> Você tem acesso exclusivo a ofertas, sorteios e novidades! <br>
        <button onclick="mostrar_pt()">Registre-se</button>
        </div>`;

        cad_titulo.innerHTML = 'CRIAR UMA CONTA';

        cad_p_nome.innerHTML = 'Primeiro Nome';
        cad_s_nome.innerHTML = 'Ultimo Nome';
        cad_email.innerHTML = 'Email';
        cad_senha.innerHTML = 'Senha';
        cad_ani.innerHTML = 'Aniversário';
        cad_pais.innerHTML = 'País';
        cad_idi.innerHTML = 'Idioma';
        btn_cad.value = 'Registri-se';


    }
    if (idioma == 'en') {
        form_login.innerHTML = `
        <span>
        Email <br>
        <input type="email" placeholder="Enter your email" name="email" id="id_email">
        </span>
        <span>
        Password <br>
        <input type="password" placeholder="Enter your password" name="senha" id="id_senha">
        </span>
        <div id="erro_login" class="esq-senha"></div>
        <div class="div-btn-entrar">
        <button id="btn_entrar" class="btn-entrar">Advance</button>
        </div>`;

        sem_cadastro.innerHTML = `
        <div class="sem-cadastro-txt" style="display: block;">
        <h1> Join to Meu Santos! </h1> Here the fan is closer to your team! <br> You have exclusive access to offers, sweepstakes and news! <br> 
        <button onclick="mostrar_en()">Join us</button>
        </div>`;

        cad_titulo.innerHTML = 'CREATE AN ACCOUNT';

        cad_p_nome.innerHTML = 'First Name';
        cad_s_nome.innerHTML = 'Last Name';
        cad_email.innerHTML = 'Email';
        cad_senha.innerHTML = 'Password';
        cad_ani.innerHTML = 'Birthday';
        cad_pais.innerHTML = 'Country';
        cad_idi.innerHTML = 'Language';
        btn_cad.value = 'Register';


    }
    if (idioma == 'es') {
        form_login.innerHTML = `
        <span>
        Email <br>
        <input type="email" placeholder="Escreba su email" name="email" id="id_email">
        </span>
        <span>
        Contraseña <br>
        <input type="password" placeholder="Escreba su senha" name="senha" id="id_senha">
        </span>           
        <div id="erro_login" class="esq-senha"></div>
        <div class="div-btn-entrar">
        <button id="btn_entrar" class="btn-entrar">Avance</button>
        </div>`;
        sem_cadastro.innerHTML = `
        <div class="sem-cadastro-txt" style="display: block;">
        <h1>¡Únete a Meu Santos!</h1> ¡Aquí el aficionado está más cerca de tu equipo! <br> ¡Tienes acceso exclusivo a ofertas, sorteos y noticias! <br>
        <button onclick="mostrar_es()">Registrarse</button>
        </div>`;

        cad_titulo.innerHTML = 'CREAR UNA CUENTA';

        cad_p_nome.innerHTML = 'Primer Nombre';
        cad_s_nome.innerHTML = 'Apellido';
        cad_email.innerHTML = 'Email';
        cad_senha.innerHTML = 'Contraseña';
        cad_ani.innerHTML = 'Cumpleaños';
        cad_pais.innerHTML = 'Padres';
        cad_idi.innerHTML = 'Idioma';
        btn_cad.value = 'Registrarse';


    }
}

function mostrar_pt() {
    sem_cadastro.style.display = 'none';
    main_cadastro.style.display = 'block';
    window.location.href = '#cadastro';

    cad_p_nome.innerHTML = 'Primeiro Nome';
    cad_s_nome.innerHTML = 'Ultimo Nome';
    cad_email.innerHTML = 'Email';
    cad_senha.innerHTML = 'Senha';
    cad_ani.innerHTML = 'Aniversário';
    cad_pais.innerHTML = 'País';
    cad_idi.innerHTML = 'Idioma';
    btn_cad.value = 'Registri-se';
}

function mostrar_en() {
    sem_cadastro.style.display = 'none';
    main_cadastro.style.display = 'block';
    window.location.href = '#cadastro';

    cad_p_nome.innerHTML = 'First Name';
    cad_s_nome.innerHTML = 'Last Name';
    cad_email.innerHTML = 'Email';
    cad_senha.innerHTML = 'Password';
    cad_ani.innerHTML = 'Birthday';
    cad_pais.innerHTML = 'Country';
    cad_idi.innerHTML = 'Language';
    btn_cad.value = 'Register';
}

function mostrar_es() {
    sem_cadastro.style.display = 'none';
    main_cadastro.style.display = 'block';
    window.location.href = '#cadastro';

    cad_p_nome.innerHTML = 'Primer Nombre';
    cad_s_nome.innerHTML = 'Apellido';
    cad_email.innerHTML = 'Email';
    cad_senha.innerHTML = 'Contraseña';
    cad_ani.innerHTML = 'Cumpleaños';
    cad_pais.innerHTML = 'Padres';
    cad_idi.innerHTML = 'Idioma';
    btn_cad.value = 'Registrarse';
}