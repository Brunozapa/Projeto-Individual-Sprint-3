function load() {
    nav1.classList.add('selecionado');
    nav2.classList.remove('selecionado');
    nav3.classList.remove('selecionado');
    nav4.classList.remove('selecionado');
    div_detalhes.style.display = 'block';
    div_jogador.style.display = 'none';
    div_sair.style.display = 'none';
    div_descontos.style.display = 'none';

}

function detalhes() {
    nav1.classList.add('selecionado');
    nav2.classList.remove('selecionado');
    nav3.classList.remove('selecionado');
    nav4.classList.remove('selecionado');
    div_detalhes.style.display = 'block';
    div_jogador.style.display = 'none';
    div_sair.style.display = 'none';
    div_descontos.style.display = 'none';


}

function jogador() {
    nav2.classList.add('selecionado');
    nav1.classList.remove('selecionado');
    nav3.classList.remove('selecionado');
    nav4.classList.remove('selecionado');
    div_detalhes.style.display = 'none';
    div_jogador.style.display = 'block';
    div_sair.style.display = 'none';
    div_descontos.style.display = 'none';


}

function descontos() {
    nav3.classList.add('selecionado');
    nav1.classList.remove('selecionado');
    nav2.classList.remove('selecionado');
    nav4.classList.remove('selecionado');
    div_detalhes.style.display = 'none';
    div_jogador.style.display = 'none';
    div_descontos.style.display = 'block';
    div_sair.style.display = 'none';


}

function sair() {
    nav4.classList.add('selecionado');
    nav1.classList.remove('selecionado');
    nav2.classList.remove('selecionado');
    nav3.classList.remove('selecionado');
    div_detalhes.style.display = 'none';
    div_jogador.style.display = 'none';
    div_descontos.style.display = 'none';
    div_sair.style.display = 'block';
    div_fav.style.display = 'none';

}

var visibilidade = false;

function ocultarExibir() { // Quando clicar no botão.

    if (visibilidade) { //Se a variável visibilidade for igual a true, então...
        document.getElementById("jogador_combobox").style.display = "none"; //Ocultamos a div
        visibilidade = false; //alteramos o valor da variável para falso.
    } else { //ou se a variável estiver com o valor false..
        document.getElementById("jogador_combobox").style.display = "block"; //Exibimos a div..
        visibilidade = true; //Alteramos o valor da variável para true.
    }
}

/* ---------------------------------------------------------------------------------------------------------------- */

/* Sorteio de Cupom */
var vetor_cupons = ['ACF34CX', 'SFC109.10', 'SXFG4A4', '50.SFC.50', 'S4NT05X', '', '', '', '', '', '', '', '', '', ''];
var sorteio_cupom = parseInt(Math.random() * 15);

/* Vetores para as informações dos jogadores */

var vetor_idade = [28, 16, 21, 33, 23, 25, 25, 17, 26, 25, 20, 18, 29, 30, 35, 19, 36, 18, 19];
var vetor_camisa = [5, 27, 17, 16, 2, 31, 34, 28, 14, 30, 37, 36, 13, 11, 4, 20, 7, 38, 9, ];
var vetor_nome = ['Alisson', 'Angelo', 'Vinicius Balieiro', 'Copete', 'Felipe Jonatan', 'John', 'João Paulo', 'Kaiky', 'Luan Peres',
    'Lucas Braga', 'Lucas Lourenço', 'Marcos Leonardo', 'Madson', 'Marinho', 'Pará', 'Gabriel Pirani', 'Carlos Sanchez', 'Sandry', 'Kaio Jorge'
];

/* Posiçoes */
var vetor_posicao_pt = ['Volante', 'Atacante', 'Volante', 'Atacante', 'Lateral', 'Goleiro', 'Goleiro', 'Zagueiro', 'Zagueiro', 'Atacante',
    'Meia-atacante', 'Atacante', 'Lateral', 'Atacante', 'Lateral', 'Meia-atacante', 'Meia-atacante', 'Volante', 'Atacante'
];
var vetor_posicao_es = ['Mediocampista', 'Delantero', 'Mediocampista', 'Delantero', 'Lateral', 'Portero', 'Portero', 'Zagueiro', 'Zagueiro',
    'Delantero', 'Medio delantero', 'Delantero', 'Lateral', 'Delantero', 'Lateral', 'Medio delantero', 'Medio delantero', 'Mediocampista', 'Delantero'
];
var vetor_posicao_en = ['Midfielder', 'Striker', 'Midfielder', 'Striker', 'Full-back', 'Goalkeeper', 'Goalkeeper', 'Defense', 'Defense', 'Striker',
    'Midfielder', 'Striker', 'Full-back', 'Striker', 'Full-back', 'Midfielder', 'Midfielder', 'Midfielder', 'Striker'
];
/* paises */
var vetor_nacionalidade = ['Brasil', 'Brasil', 'Brasil ', 'Colombia', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil',
    'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Uruguai', 'Brasil', 'Brasil'
];
var vetor_nacionalidade_es = ['Brasil', 'Brasil', 'Brasil ', 'Colombia', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil',
    'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Brasil', 'Uruguay', 'Brasil', 'Brasil'
];
var vetor_nacionalidade_en = ['Brazil', 'Brazil', 'Brazil ', 'Colombia', 'Brazil', 'Brazil', 'Brazil', 'Brazil', 'Brazil',
    'Brazil', 'Brazil', 'Brazil', 'Brazil', 'Brazil', 'Brazil', 'Brazil', 'Uruguay', 'Brazil', 'Brazil'
];

/* ----------------------------------------------------------------------------------------------------------------------------------------- */
let login_usuario;
let nome_usuario;

function redirecionar_login() {

    idioma_usuario = sessionStorage.idioma_usuario_meuapp;
    idioma_usuario == 'Ingles' ? window.location.href = 'home-en.html' :
        (idioma_usuario == 'Espanhol' ? window.location.href = 'home-es.html' : window.location.href = 'home-pt.html');

}

function verificar_autenticacao() {

    login_usuario = sessionStorage.login_usuario_meuapp;
    primeiro_nome = sessionStorage.primeiro_nome_usuario_meuapp;
    segundo_nome = sessionStorage.segundo_nome_usuario_meuapp;
    foto_perfil = sessionStorage.foto_perfil_usuario_meuapp;
    idioma_usuario = sessionStorage.idioma_usuario_meuapp;
    pais_usuario = sessionStorage.pais_usuario_meuapp;
    aniversario_usuario = sessionStorage.aniversario_usuario_meuapp;
    email_usuario = sessionStorage.email_usuario_meuapp;

    var img1 = document.querySelector("#img_perfil");
    var img2 = document.querySelector("#img_jogador");
    var img3 = document.querySelector("#img_pais");

    var idioma_final = (idioma_usuario == 'Ingles' ? idioma_final = 'English' : (idioma_usuario == 'Espanhol' ? idioma_final = 'Español' : idioma_final = 'Português'));

    /* capturando os vetores das informaçoes dos jogadores */
    var array = foto_perfil - 1;
    var idade = vetor_idade[array];
    var camisa = vetor_camisa[array];
    var nome = vetor_nome[array];
    var nacionalidade = vetor_nacionalidade[array];
    var posicao_pt = vetor_posicao_pt[array];
    var posicao_es = vetor_posicao_es[array];
    var posicao_en = vetor_posicao_en[array];


    if (login_usuario == undefined) {

    } else {
        /* Informaçeoes principais po perfil */
        b_usuario.innerHTML = `${primeiro_nome} ${segundo_nome} <img class="bandeira" src="Imagens/Bandeiras/${pais_usuario}.png">`;
        validar_sessao();
        /* Informaçoes da pagina "Detalhes" */
        b_primeiro_nome.innerHTML = `${primeiro_nome}`;
        b_ultimo_nome.innerHTML = `${segundo_nome}`;
        b_idioma.innerHTML = `${idioma_final}`;
        b_aniversario.innerHTML = `${aniversario_usuario}`;
        b_email.innerHTML = `${email_usuario}`;

        /* Configura da pagina "Jogador Favorito" */
        if (idioma_usuario == 'Portugues') {
            /* Fotos do Jogador */
            img1.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            img2.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            /* Informaçoes do jogador */
            b_nome_jogador.innerHTML = `${nome}`;
            b_posicao.innerHTML = `${posicao_pt}`;
            b_camisa.innerHTML = `Camisa ${camisa}`;
            b_idade.innerHTML = `${idade} anos`;
            b_nacionalidade.innerHTML = `<img src="Imagens/Bandeiras/${nacionalidade}.png" class="header-language-img"> ${nacionalidade}`;

            /* sorteia cupom */
            var cupom_usuario = vetor_cupons[sorteio_cupom];
            if (cupom_usuario == '') {
                titulo_descontos.innerHTML = 'Desculpa, nenhum cupom de desconto disponivel.';
                nome_cupom.style.display = 'none';
            } else {
                titulo_descontos.innerHTML = 'Você Possui um Cupom de Desconto!';
                nome_cupom.innerHTML = `${cupom_usuario}`;
                infos_cupom.innerHTML = 'Para ativar esse código promocional, basta inserir no campo de indicado na compra.';
                desc_cupom.innerHTML = 'Esse cupom só é valido até o dia 30/06 no site <a target="_blank" class="link-loja-cupom" href="https://www.santosstore.com.br/">https://www.santosstore.com.br/</a>';

            }

        } else if (idioma_usuario == 'Espanhol') {
            nacionalidade_es = vetor_nacionalidade_es[array]; /* define o idioma do país */
            img1.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            img2.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            b_nome_jogador.innerHTML = `${nome}`;
            b_posicao.innerHTML = `${posicao_es}`;
            b_camisa.innerHTML = `Camisa ${camisa}`;
            b_idade.innerHTML = `${idade} años`;
            b_nacionalidade.innerHTML = `<img src="Imagens/Bandeiras/${nacionalidade}.png" class="header-language-img"> ${nacionalidade_es}`;

            var cupom_usuario = vetor_cupons[sorteio_cupom];
            if (cupom_usuario == '') {
                titulo_descontos.innerHTML = 'Lo siento. Cualquier cupón de descuento disponible.';
                nome_cupom.style.display = 'none';
            } else {
                titulo_descontos.innerHTML = '¡Tienes un cupón de descuento!';
                nome_cupom.innerHTML = `${cupom_usuario}`;
                infos_cupom.innerHTML = 'Para activar este código promocional, simplemente ingrese en el campo indicado en la compra.';
                desc_cupom.innerHTML = 'Este cupón solo es válido hasta el 30/06 en el sitio <a target="_blank" class="link-loja-cupom" href="https://www.santosstore.com.br/">https://www.santosstore.com.br/</a>';

            }

        } else if (idioma_usuario == 'Ingles') {

            nacionalidade_en = vetor_nacionalidade_en[array]; /* define o idioma do país */
            img1.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            img2.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            b_nome_jogador.innerHTML = `${nome}`;
            b_posicao.innerHTML = `${posicao_en}`;
            b_camisa.innerHTML = `Number ${camisa}`;
            b_idade.innerHTML = `${idade} years`;
            b_nacionalidade.innerHTML = `<img src="Imagens/Bandeiras/${nacionalidade}.png" class="header-language-img"> ${nacionalidade_en}`;

            var cupom_usuario = vetor_cupons[sorteio_cupom];
            if (cupom_usuario == '') {
                titulo_descontos.innerHTML = 'Sorry. Any discount coupons available.';
                nome_cupom.style.display = 'none';
            } else {
                titulo_descontos.innerHTML = 'You Have a Discount Coupon!!';
                nome_cupom.innerHTML = `${cupom_usuario}`;
                infos_cupom.innerHTML = 'To activate this promotional code, simply enter in the field indicated in the purchase.';
                desc_cupom.innerHTML = 'This coupon is only valid until 06/30 on the website <a target="_blank" class="link-loja-cupom" href="https://www.santosstore.com.br/">https://www.santosstore.com.br/</a>';

            }
        }

        /* Configura o nome dos paises */
        switch (pais_usuario) {
            case 'ALE':
                b_pais.innerHTML = 'Deutschland';
                break
            case 'ANG':
                b_pais.innerHTML = 'Angola';
                break
            case 'ARG':
                b_pais.innerHTML = 'Argentina';
                break
            case 'AUS':
                b_pais.innerHTML = 'Australia';
                break
            case 'BOL':
                b_pais.innerHTML = 'Bolívia';
                break
            case 'BRA':
                b_pais.innerHTML = 'Brasil';
                break
            case 'CHI':
                b_pais.innerHTML = 'Chile';
                break
            case 'CHN':
                b_pais.innerHTML = '中国';
                break
            case 'COL':
                b_pais.innerHTML = 'Colombia';
                break
            case 'EQU':
                b_pais.innerHTML = 'Equador';
                break
            case 'ESP':
                b_pais.innerHTML = 'España';
                break
            case 'EUA':
                b_pais.innerHTML = 'United States of America';
                break
            case 'FRA':
                b_pais.innerHTML = 'France';
                break
            case 'HOL':
                b_pais.innerHTML = 'Nederland';
                break
            case 'IND':
                b_pais.innerHTML = 'India';
                break
            case 'ITA':
                b_pais.innerHTML = 'Italia';
                break
            case 'JAP':
                b_pais.innerHTML = '日本';
                break
            case 'MOC':
                b_pais.innerHTML = 'moçambique';
                break
            case 'MEX':
                b_pais.innerHTML = 'Mexico';
                break
            case 'PAR':
                b_pais.innerHTML = 'Paraguai';
                break
            case 'PER':
                b_pais.innerHTML = 'Peru';
                break
            case 'POR':
                b_pais.innerHTML = 'Portugal';
                break
            case 'RNU':
                b_pais.innerHTML = 'United Kingdom';
                break
            case 'RUS':
                b_pais.innerHTML = 'Россия';
                break
            case 'URU':
                b_pais.innerHTML = 'Uruguay';
                break
        }




    }
}

function logoff() {
    finalizar_sessao();
    redirecionar_login();
    sessionStorage.clear();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}