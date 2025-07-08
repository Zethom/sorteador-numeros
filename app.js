function sortear(){

    let quantidade = document.getElementById(`quantidade`).value;
    let inicial = parseInt(document.getElementById(`de`).value);
    let limite = parseInt(document.getElementById(`ate`).value);

    let sorteados = [];
    let valor;

    for(let i = 0; i < quantidade; i++){
        valor = aleatorizarNumero(inicial, limite);

        if(quantidade > (limite - inicial + 1)){

            while(sorteados.includes(valor) && i < (limite - inicial + 1)){
                valor = aleatorizarNumero(inicial, limite);
            }

            sorteados.push(valor);
            alterarBotaoDeReiniciar();

        } else {

            while(sorteados.includes(valor)){
                valor = aleatorizarNumero(inicial, limite);
            }
            
            sorteados.push(valor);
            alterarBotaoDeReiniciar();
        }
 
    }

    let textoResultado = document.getElementById(`resultado`);
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

}

function reiniciar(){

    document.getElementById(`quantidade`).value = ``;
    document.getElementById(`de`).value = ``;
    document.getElementById(`ate`).value = ``;
    document.getElementById(`resultado`).innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarBotaoDeReiniciar();
}

function aleatorizarNumero(min, max){
    
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function alterarBotaoDeReiniciar(){

    let botaoReiniciar = document.getElementById(`btn-reiniciar`);
    if (botaoReiniciar.classList.contains(`container__botao-desabilitado`)){

        botaoReiniciar.classList.remove(`container__botao-desabilitado`);
        botaoReiniciar.classList.add(`container__botao`);

    }else if (botaoReiniciar.classList.contains(`container__botao`)){

        botaoReiniciar.classList.remove(`container__botao`);
        botaoReiniciar.classList.add(`container__botao-desabilitado`);

    }

}