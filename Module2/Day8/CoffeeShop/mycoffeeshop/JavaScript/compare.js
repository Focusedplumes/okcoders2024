let shoppingCart = []; // Initialize the shopping cart array

function displayMenuItems(items) {
    let menuDiv = document.getElementById("menu");
    for (let i = 0; i < items.length; i++) {
        let menuItem = items[i];

        let menuItemDiv = document.createElement('div');
        menuItemDiv.innerHTML = "<p>" + menuItem.Name + "<br>" + menuItem.Description + "<br>" + menuItem.Price + "</p>";

        const itemButton = document.createElement('button');
        itemButton.textContent = "Add to Cart";

        // Use a closure to capture the correct menuItem
        itemButton.onclick = (function(item) {
            return function() {
                addToCart(item);
            };
        })(menuItem); // Immediately invoke the function with menuItem as argument

        menuItemDiv.appendChild(itemButton);
        menuDiv.appendChild(menuItemDiv);
    }
}

function addToCart(item) {
    shoppingCart.push(item); // Add the item to the shopping cart array
    displayShoppingCart(shoppingCart); // Update the content of the shopping cart display
    console.log("Updated shopping cart", shoppingCart);
}

function displayShoppingCart(inShoppingCart) {
    console.log("shopping cart", inShoppingCart);

    let displayCartDiv = document.getElementById("shopping-cart");
    displayCartDiv.innerHTML = ''; // Clear previous content of the shopping cart display

    inShoppingCart.forEach(function(item) {
        let cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = "<p>" + item.Name + "<br>" + item.Description + "<br>" + item.Price + "</p>";
        displayCartDiv.appendChild(cartItemDiv);
    });
}

// Example usage:
window.onload = function () {
    console.log("window loaded");
    displayMenuItems(menuItems);
};
