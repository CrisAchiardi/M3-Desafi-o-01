const quantity = document.querySelector('.quantity');
const basePrice = document.querySelector('.base-price');
const totalPrice = document.querySelector('.total-price');
const increaseButton = document.querySelector('.increase-quantity');
const decreaseButton = document.querySelector('.decrease-quantity');

const priceValue = 400000;
let quantityValue = 0;

function updateValues() {
    quantity.innerHTML = quantityValue;
    const total = priceValue * quantityValue;
    totalPrice.innerHTML = total;
}

basePrice.innerHTML = priceValue;
updateValues();

increaseButton.addEventListener('click', function() {
    quantityValue++;
    updateValues();
});

decreaseButton.addEventListener('click', function() {
    if (quantityValue > 0) {
        quantityValue--;
        updateValues();
    }
});