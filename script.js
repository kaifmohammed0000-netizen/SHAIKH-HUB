// script.js

// Handle product form submission
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').value;

    const product = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Save product to local storage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    displayProducts();
});

// Display products from local storage
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p><img src='${product.image}' alt='${product.name}' />`;
        productsContainer.appendChild(productDiv);
    });
}

// Initial display of products
displayProducts();
