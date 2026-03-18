// JavaScript code for enhanced product management

// Function to handle product form submission
function handleProductFormSubmit(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;
    const productLocation = document.getElementById('product-location').value;
    const productCategory = document.getElementById('product-category').value;

    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        location: productLocation,
        category: productCategory,
    };

    saveProductToLocal(product);
    displayProducts();
}

// Function to save product to local storage
function saveProductToLocal(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.name}</h3>\n            <p>${product.description}</p>\n            <p>Price: $${product.price}</p>\n            <p>Location: ${product.location}</p>\n            <button onclick="deleteProduct(${index})">Delete</button>`;
        productsContainer.appendChild(productDiv);
    });
}

// Function to delete a product
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

// Function to filter products by location and category
function filterProducts() {
    // Implement filtering logic
}

// Function to search products by name and description
function searchProducts() {
    // Implement search logic
}

// Call displayProducts on page load to show stored products
document.addEventListener('DOMContentLoaded', displayProducts);

// Event listener for form submission
const form = document.getElementById('product-form');
form.addEventListener('submit', handleProductFormSubmit);