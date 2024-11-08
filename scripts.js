document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product-item');
    const searchInput = document.getElementById('search');
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');
    const deliveryForm = document.getElementById('delivery-form');
    let cart = [];

    // Fonction pour ajouter un produit au panier
    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    // Fonction pour rendre le panier
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.querySelector('h3').textContent;
            cartItemsContainer.appendChild(div);
        });
    }

    // Fonction de recherche
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Ajout des événements pour le panier
    products.forEach(product => {
        const button = product.querySelector('.add-to-cart');
        button.addEventListener('click', function() {
            addToCart(product);
        });
    });

    // Validation du panier
    checkoutButton.addEventListener('click', function() {
        document.getElementById('delivery-info').style.display = 'block';
    });

    // Envoi des informations de livraison
    deliveryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        const message = `Nom: ${name}\nPrénom: ${surname}\nTéléphone: ${phone}\nAdresse: ${address}`;
        
        // Simulation de l'envoi de SMS (remplacer par un service API réel pour l'envoi de SMS)
        console.log('Message envoyé à +221778154664:', message);

        alert('Votre commande a été envoyée avec succès!');
        cart = [];  // Vide le panier après l'envoi
        renderCart();
    });
});
