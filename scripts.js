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
