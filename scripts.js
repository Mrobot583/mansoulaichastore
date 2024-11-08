document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');
    const deliveryForm = document.getElementById('delivery-form');
    const searchInput = document.getElementById('search');
    const productItems = document.querySelectorAll('.product-item');

    // Fonction pour ajouter au panier
    function addToCart(productElement) {
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p').textContent;
        const product = {
            name: productName,
            price: productPrice,
        };
        cart.push(product);
        renderCart();
    }

    // Affichage du panier
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - ${item.price}`;
            cartItemsContainer.appendChild(div);
        });
    }

    // Recherche des produits
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        productItems.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Ajout au panier
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productItem = event.target.closest('.product-item');
            addToCart(productItem);
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
        
        // Simule l'envoi de message (ici, vous pouvez intégrer une vraie API pour envoyer le SMS)
        console.log(`Message envoyé à +221778154664: ${message}`);

        alert('Commande envoyée avec succès!');
        cart.length = 0;  // Vider le panier après envoi
        renderCart();
    });
});
