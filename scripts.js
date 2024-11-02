document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Fonctionnalités panier et recherche
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    document.getElementById('cartCount').textContent = cart.length;
    alert(`${productName} a été ajouté au panier !`);
}

function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.product-item').forEach(item => {
        const productName = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = productName.includes(input) ? '' : 'none';
    });
}
// Initialiser un objet pour stocker les articles du panier
const cart = {};

// Fonction pour mettre à jour le panier
function updateCart(productName, productPrice, quantityChange) {
    // Vérifier si le produit existe déjà dans le panier
    if (!cart[productName]) {
        // Si non, initialiser la quantité et le prix total
        cart[productName] = { quantity: 0, price: productPrice };
    }

    // Modifier la quantité en fonction du changement
    cart[productName].quantity += quantityChange;

    // Ne pas permettre des quantités négatives
    if (cart[productName].quantity < 0) {
        cart[productName].quantity = 0;
    }

    // Mettre à jour l'affichage du nombre d'articles
    document.getElementById(`count-${productName.replace(/ /g, '-')}`).innerText = cart[productName].quantity;

    // Afficher les articles du panier
    displayCartItems();
}

// Fonction pour afficher les articles dans le panier
function displayCartItems() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = ""; // Réinitialiser le contenu

    // Vérifier si le panier est vide
    if (Object.keys(cart).length === 0) {
        cartItemsDiv.innerHTML = "<p>Votre panier est vide.</p>";
        return;
    }

    // Créer une liste pour les articles du panier
    const ul = document.createElement("ul");

    // Ajouter chaque produit du panier à la liste
    for (const product in cart) {
        const item = document.createElement("li");
        item.textContent = `${product}: ${cart[product].quantity} x ${cart[product].price}f`;
        ul.appendChild(item);
    }

    // Ajouter la liste au conteneur du panier
    cartItemsDiv.appendChild(ul);
}

function showCart() {
    const cartDetails = cart.map(item => `${item.name} - ${item.price}f`).join('\n');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const clientInfo = prompt("Pour finaliser la commande, entrez votre nom, prénom, numéro de téléphone et adresse (séparés par des virgules):");
    
    if (clientInfo) {
        const [nom, prenom, telephone, adresse] = clientInfo.split(',');
        const message = `Nom: ${nom}\nPrénom: ${prenom}\nTéléphone: ${telephone}\nAdresse: ${adresse}\n\nCommande:\n${cartDetails}\nTotal: ${total}f`;
        window.open(`https://wa.me/221778154664?text=${encodeURIComponent(message)}`);
    }
}
