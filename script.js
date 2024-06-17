document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Classic White T-Shirt',
            image: 'https://via.placeholder.com/300',
            price: '$19.99'
        },
        {
            name: 'Black V-Neck T-Shirt',
            image: 'https://via.placeholder.com/300',
            price: '$24.99'
        },
        {
            name: 'Grey Crew Neck T-Shirt',
            image: 'https://via.placeholder.com/300',
            price: '$22.99'
        }
    ];

    const productsContainer = document.getElementById('products');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cart = [];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productItem.querySelector('button').addEventListener('click', () => {
            addToCart(product);
        });

        productsContainer.appendChild(productItem);
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                ${item.name} - ${item.price}
                <button class="remove" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartCount.textContent = cart.length;

        document.querySelectorAll('.remove').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    document.querySelector('.cart').addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    document.getElementById('close-cart').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    document.getElementById('shop-now').addEventListener('click', () => {
        productsContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
