// Script pour ajouter des produits au panier
let cart = [];

function addToCart(productName, productPrice) {
    // Créer un objet produit à ajouter au panier
    const product = {
        name: productName,
        price: productPrice
    };

    // Ajouter le produit au panier
    cart.push(product);
    alert(`${productName} a été ajouté au panier!`);
    console.log(cart);
}

// Ajout des événements d'écoute pour chaque bouton "Ajouter au panier"
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', function () {
        const productName = this.previousElementSibling.previousElementSibling.innerText; // Récupère le nom du produit
        const productPrice = this.previousElementSibling.innerText; // Récupère le prix du produit

        // Nettoyage du prix pour qu'il soit un nombre sans 'f'
        const priceNumber = parseInt(productPrice.replace('f', '').replace(' ', ''));

        // Ajout au panier
        addToCart(productName, priceNumber);
    });
});
