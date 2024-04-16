let shoppingCart = []; // Initialize the shopping cart array

function displayMenuItems(items) {
    let menuDiv = document.getElementById("menu");

    items.forEach(function(menuItem) {
        let menuItemDiv = document.createElement('div');
        menuItemDiv.innerHTML = "<p>" + menuItem.Name + "<br>" + menuItem.Description + "<br>" + menuItem.Price + "</p>";

        const itemButton = document.createElement('button');
        itemButton.textContent = "Add to Cart";

        itemButton.onclick = function() {
            addToCart(menuItem); // Pass the menuItem to addToCart when button is clicked
        };

        menuItemDiv.appendChild(itemButton);
        menuDiv.appendChild(menuItemDiv);
    });
}

function addToCart(item) {
    shoppingCart.push(item); // Add the item to the shopping cart array
    displayShoppingCart(); // Update the content of the shopping cart display
    console.log("Updated shopping cart", shoppingCart);
}

function displayShoppingCart() {
    let displayCartDiv = document.getElementById("shopping-cart");
    displayCartDiv.innerHTML = ''; // Clear previous content of the shopping cart display

    shoppingCart.forEach(function(item) {
        let cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = "<p>" + item.Name + "<br>" + item.Description + "<br>" + item.Price + "</p>";
        displayCartDiv.appendChild(cartItemDiv);
    });
}

// Example usage:
window.onload = function() {
    console.log("window loaded");
    displayMenuItems(menuItems);
};
