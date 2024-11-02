// Exemple de code JavaScript pour la gestion des événements de défilement pour le menu de navigation
document.addEventListener('DOMContentLoaded', function() {
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
});
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100; // Ajustez l'offset selon votre configuration
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} a été ajouté au panier !`);
    console.log(cart);
}
function filterProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} a été ajouté au panier !`);

    // Ajout d'une animation
    const productItem = event.target.closest('.product-item');
    productItem.classList.add('added');
    setTimeout(() => {
        productItem.classList.remove('added');
    }, 1000);
}
function showCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} - ${item.price}f</p>`;
    });

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Votre panier est vide.</p>';
    }
}
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

