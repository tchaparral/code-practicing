// Function to buy ticket
function comprar() {
    // Identify ticket type
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;    
    // Count quantity
    let quantidade = parseInt(document.getElementById('qtd').value);
    

    // Get current ticket quantities for each section
    let ingressosPista = parseInt(document.getElementById('qtd-pista').innerText);
    let ingressosSuperior = parseInt(document.getElementById('qtd-superior').innerText);
    let ingressosInferior = parseInt(document.getElementById('qtd-inferior').innerText);

    // Check ticket type and update corresponding quantity
    if(tipoDeIngresso == 'pista') {
        if(ingressosPista > 0 && ingressosPista >= quantidade) {
            // Subtract quantity from pista section
            ingressosPista = ingressosPista - quantidade;
            document.getElementById('qtd-pista').innerHTML = `<span id="qtd-pista">${ingressosPista}</span></li>`;
        } else {
            alert('Ingressos Insuficientes');
        }
    } else if(tipoDeIngresso == 'superior') {
        if(ingressosSuperior > 0 && ingressosSuperior >= quantidade) {
            // Subtract quantity from superior section
            ingressosSuperior = ingressosSuperior - quantidade;
            document.getElementById('qtd-superior').innerHTML = `<span id="qtd-superior">${ingressosSuperior}</span></li>`;
        } else {
            alert('Ingressos Insuficientes');
        }
    } else {
        if(ingressosInferior > 0 && ingressosInferior >= quantidade) {
            // Subtract quantity from inferior section
            ingressosInferior = ingressosInferior - quantidade;
            document.getElementById('qtd-inferior').innerHTML = `<span id="qtd-inferior">${ingressosInferior}</span></li>`;
        } else {
            alert('Ingressos Insuficientes');
        } 
    }
}