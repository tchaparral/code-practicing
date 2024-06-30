// criando variaveis
let numeroSecreto;
let tentativas;
let sorteados = [];
let qtdeNumeros = 1000

// gerador de numero aleatorio
function numAleatorio() {
    let numeroSorteado = parseInt(Math.random() * qtdeNumeros +  1);
    if(sorteados.includes(numeroSorteado)) {
        return numAleatorio();
    } else {
        sorteados.push(numeroSorteado);
        console.log(sorteados);
        return numeroSorteado;
    }
}

// criando função iterção HTML
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

// função para limpar o campo
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ""
}

// chamando a função
function reiniciarJogo(){
    numeroSecreto = numAleatorio();
    tentativas = 0;
    console.log(numeroSecreto);
    exibirTextoNaTela('h1', 'Jogo chato do Caralho');
    exibirTextoNaTela('p', `Insira um número de 1 a ${qtdeNumeros}`);
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}
reiniciarJogo();

// comparando e dando dicas
function ajudandoOtario(numeroSecreto, chute) {
    if(numeroSecreto > chute) {
        exibirTextoNaTela('p', 'o numero é maior que seu chute');
    } else {
        exibirTextoNaTela('p', 'o numero é menor que seu chute');
    }
}

// Criando a função para iteração com botão
function verificarChute() {
    tentativas++
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if(parseFloat(chute) == numeroSecreto) {
        let palavraTent = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemCerta = `Acertou com ${tentativas} ${palavraTent}`;
        exibirTextoNaTela('h1', mensagemCerta);
        exibirTextoNaTela('p', 'grande bosta');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'erroooou!');
        ajudandoOtario(numeroSecreto, chute);
        limparCampo()
    }
}
