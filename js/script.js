const decreaseButtons = document.querySelectorAll(".fas.fa-minus-circle");
const increaseButtons = document.querySelectorAll(".fas.fa-plus-circle");
const deleteButtons = document.querySelectorAll(".fas.fa-trash-alt");
const likeButtons = document.querySelectorAll(".fas.fa-heart");

function updateQuantity(element, increment) {
    const quantityElement = element.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (increment) {
        quantity++; // équivalent à quantity = quantity + 1;
    } else {
        if (quantity > 0) {
            quantity--;
        }
    }
    quantityElement.textContent = quantity;
}

increaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateQuantity(button, true);
    });
});

decreaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateQuantity(button, false);
    });
});
