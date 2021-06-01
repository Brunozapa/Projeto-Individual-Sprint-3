let login_usuario;

var vetor_nome = ['Alisson', 'Angelo', 'Vinicius Balieiro', 'Copete', 'Felipe Jonatan', 'John', 'João Paulo', 'Kaiky', 'Luan Peres',
    'Lucas Braga', 'Lucas Lourenço', 'Marcos Leonardo', 'Madson', 'Marinho', 'Pará', 'Gabriel Pirani', 'Carlos Sanchez', 'Sandry', 'Kaio Jorge'
];


function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    primeiro_nome = sessionStorage.primeiro_nome_usuario_meuapp;
    foto_perfil = sessionStorage.foto_perfil_usuario_meuapp;

    var img1 = document.querySelector("#img_perfil");

    var array = foto_perfil - 1;
    var nome = vetor_nome[array];


    if (login_usuario == undefined) {

    } else {
        b_nome.innerHTML = `${primeiro_nome}`;

        img1.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
        validar_sessao();

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
}

function recuperar_favorito() {
    fetch("/leituras/favorito", {
        method: "GET",
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {
                /* sessionStorage.favorito_da_galera = json.jogFav; */
                var favorito_da_galera = json.jogFav;
                var posicao = favorito_da_galera - 1;
                var nome = vetor_nome[posicao];
                var img1 = document.querySelector("#img_fav");

                txt_fav.innerHTML = `${nome}`;
                img1.setAttribute('src', `Imagens/Jogadores/${nome}.png`);
            });

        }
    });
}

function recuperar_favorito_index() {
    fetch("/leituras/favorito", {
        method: "GET",
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {
                /* sessionStorage.favorito_da_galera = json.jogFav; */
                var favorito_da_galera = json.jogFav;
                var posicao = favorito_da_galera - 1;
                var nome = vetor_nome[posicao];
                var img1 = document.querySelector("#img_fav");

                txt_fav.innerHTML = `${nome}`;
                img1.setAttribute('src', `Home/Imagens/Jogadores/${nome}.png`);
            });

        }
    });
}