// 
let total = 0;

// Add to chart function
function adicionar() {
    // Recuperar os itens e os preços unitarios de entrada
    let item = document.getElementById('produto').value;
    let nomeProduto = item.split(' -')[0];
    let valorUnitario = item.split('- R$')[1];
    
    // Recuperar a quantidade de itens
    qtdd = document.getElementById('quantidade').value;
        
    // Calcular subtotal
    let subTotal = valorUnitario * qtdd;

    // Adicionar itens no carrinho
    if(qtdd != 0) {
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${qtdd}</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
            </section>`
    } else {
        alert('Favor informar quantidade de protudos');
    }   
    // Calcular total global
    total = total + subTotal;

    let infoTotal = document.getElementById('valor-total');
    infoTotal.innerText = `R$ ${total}`;
    document.getElementById('quantidade').value = ''
}

// Fuction to reset all fields
function limpar() {
    // Acess to 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = ''
    let value = document.getElementById('valor-total');
    value.innerText = ''
}
