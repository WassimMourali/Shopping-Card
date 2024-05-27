//script qui permet de mettre l'écoute de fonction global en écoute
document.addEventListener("DOMContentLoaded", function() {

    //déclaration des éléments html en code script
    const plusButtons = document.querySelectorAll(".fas.fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fas.fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fas.fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fas.fa-heart");

//fonction pour fait l'incementation la quantité au panier en clic sur bouton +
    plusButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });
    });

//fonction pour fait l'decrementation la quantité au panier en clic sur bouton -
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

//fonction qui permet de supprimer l'article au niveau d'interface client si en clic sur bouton supprimer
    deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cardBody = button.closest(".card-body");
            cardBody.parentElement.remove();
            updateTotalPrice();
        });
    });

//fonction qui permet de activer ou deactiver icon j'aime par si en rouge (active) si non (déactivé)
    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            button.classList.toggle("text-danger");
        });
    });

//fonction pour mettre la mise à jour de total prix et calculer le montant par méthode prix article * nombre d'unité
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

