function detalhes() {

    nav1.classList.add('selecionado');
    nav2.classList.remove('selecionado');
    div_detalhes.style.display = 'block';
    div_jogador.style.display = 'none';

}

function jogador() {
    nav2.classList.add('selecionado');
    nav1.classList.remove('selecionado');
    div_detalhes.style.display = 'none';
    div_jogador.style.display = 'block';

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