// Function to change the game status (rent/return)
function alterarStatus(id) {
    // Get the game item by ID
    let item = document.getElementById('game-' + id);
    // Select the div containing the game image
    let div = item.querySelector('.dashboard__item__img');
    // Select the action button (Rent/Return)
    let button = item.querySelector('.dashboard__item__button');

    // Check the button text to determine the action
    if(button.innerText === 'Alugar') {
        // If the text is 'Rent', change to 'Return' and add relevant classes
        div.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerText = 'Devolver';
    } else {
        // If the text is 'Return', change to 'Rent' and remove relevant classes
        div.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.innerText = 'Alugar';
    }

}