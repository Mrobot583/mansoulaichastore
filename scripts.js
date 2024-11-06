document.addEventListener('DOMContentLoaded', function() {
    // Gestion des événements de défilement pour le menu de navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialiser un tableau pour stocker les produits ajoutés au panier
    let panier = [];

    // Sélectionner tous les boutons "Ajouter au Panier" sur la page
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Fonction pour ajouter un produit au panier
    function ajouterAuPanier(event) {
        // Obtenir le bouton qui a été cliqué
        const button = event.target;
        // Récupérer les attributs de données (nom et prix) du produit
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Créer un objet représentant le produit
        const produit = {
            name: productName,
            price: productPrice
        };

        // Ajouter le produit au tableau panier
        panier.push(produit);

        // Afficher le contenu du panier dans la console
        console.log("Produit ajouté au panier:", produit);
        console.log("Contenu du panier:", panier);

        // Afficher un message de confirmation à l'utilisateur
        alert(`${productName} a été ajouté au panier.`);
    }

    // Ajouter un écouteur d'événement "click" pour chaque bouton "Ajouter au Panier"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', ajouterAuPanier);
    });
});
