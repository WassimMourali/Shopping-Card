document.addEventListener("DOMContentLoaded", function() {
    const plusButtons = document.querySelectorAll(".fas.fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fas.fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fas.fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fas.fa-heart");

    plusButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cardBody = button.closest(".card-body");
            cardBody.parentElement.remove();
            updateTotalPrice();
        });
    });

    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("text-danger");
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        const unitPrices = document.querySelectorAll(".unit-price");
        const quantities = document.querySelectorAll(".quantity");
        unitPrices.forEach((price, index) => {
            totalPrice += parseInt(price.textContent) * parseInt(quantities[index].textContent);
        });
        document.querySelector(".total").textContent = totalPrice + " $";
    }
});
