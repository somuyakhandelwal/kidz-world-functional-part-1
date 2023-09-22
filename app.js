// Initialize the cart as an empty object
const cart = {};

// Function to update the cart when the "Add to cart" button is clicked
const addToCart = (itemId) => {
    // Check if the item is already in the cart
    if (cart[itemId]) {
        // If yes, increment the quantity
        cart[itemId]++;
    } else {
        // If not, add the item to the cart with a quantity of 1
        cart[itemId] = 1;
    }
    
    // Update the cart value in the HTML
    updateCartValue();
}

// Function to update the cart value in the HTML
const updateCartValue = () => {
    const cartValueElement = document.getElementById('cart-value');
    const totalItems = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    cartValueElement.textContent = totalItems;
}

// Function to calculate the total price of items in the cart
const calculateTotalPrice = () => {
    const items = {
        book1: 7.49,
        book2: 4.59,
        book3: 6.80,
        book4: 10.00,
        book5: 7.29,
        book6: 4.99,
        game1: 17.49,
        game2: 19.99,
        game3: 20.99,
        game4: 19.49,
        craft1: 12.49,
        craft2: 19.99,
        craft3: 15.99,
        craft4: 18.49,
    };

    // Calculate the total price based on the items in the cart
    let totalPrice = 0;
    for (const itemId in cart) {
        totalPrice += items[itemId] * cart[itemId];
    }

    return totalPrice.toFixed(2);
}

// Function to print order details and total amount to the console
const printOrderDetails = () => {
    console.log('Order Details:');
    for (const itemId in cart) {
        // Get the item name from the data-item attribute
        const itemName = document.querySelector(`#${itemId}`).getAttribute('data-item');
        console.log(`${itemName}: ${cart[itemId]}`);
    }

    const totalAmount = calculateTotalPrice();
    console.log(`Total Amount: $${totalAmount}`);
}

// Add click event listeners to "Add to cart" buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        const itemId = event.currentTarget.id;
        addToCart(itemId);
    });
});

// Add click event listener to "cart items" button
document.getElementById('cart').addEventListener('click', () => {
    printOrderDetails();
});

// Initial update of the cart value
updateCartValue();
