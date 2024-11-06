// Function to show checkout form when the "Ajouter au panier" button is clicked
function showCheckoutForm() {
    const checkoutFormContainer = document.getElementById('checkoutFormContainer');
    checkoutFormContainer.style.display = 'block';
}

// Adding event listener to buttons with the class 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        showCheckoutForm();
    });
});

// Handling form submission
document.getElementById('checkoutForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;

    if (email && location) {
        // You can add a confirmation message or send the data to a server here.
        alert(`Votre commande a été envoyée avec succès!\nE-mail: ${email}\nLocalisation: ${location}`);
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});
