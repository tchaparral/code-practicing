// Global variables
let qtdeNumeros;
let numInicial;
let numFinal;
let resultados = [];

// Function to read input values from index.html
function lendoInputs() {
    qtdeNumeros = parseInt(document.getElementById('quantidade').value);
    numInicial = parseInt(document.getElementById('de').value);
    numFinal = parseInt(document.getElementById('ate').value);
}

// Random number generator function
function gerandoAleatorio(numInicial, numFinal) {
    return Math.floor(Math.random() * (numFinal - numInicial + 1)) + numInicial;
}

// Function to manipulate text in result field
function exibirTexto(selector, texto) {
    let campo = document.querySelector(selector);
    campo.innerHTML = texto;
}


// Function to handle the sort action
function sortear() {
    lendoInputs();
    if(isNaN(qtdeNumeros) || isNaN(numFinal) || isNaN(numFinal)) {
    exibirTexto('#resultado', 'Valores incorretos'); // Checking if input values are valid; displaying error message if any field is blank
    } else {
        resultados = [] // Initializing array for storing results
        while(qtdeNumeros >= 1) {
            let resultado = gerandoAleatorio(numInicial, numFinal); // Generating random numbers within specified range
            resultados.push(resultado);
            qtdeNumeros--;                         
        }
    exibirTexto('#resultado', `Números sorteados: ${resultados}`); // Displaying sorted numbers; enabling the restart button
    document.getElementById('btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao'); // Enabling the restart button
    }
}

// Function to restart the game
function reiniciar() {
    document.getElementById('btn-reiniciar').classList.replace('container__botao', 'container__botao-desabilitado'); // Disabling the restart button
    // function to clear input fields
    function limparCampo(tag){
        campo = document.querySelector(tag);
        campo.value = "";
    }
    limparCampo('#quantidade');
    limparCampo('#de');
    limparCampo('#ate');
}


