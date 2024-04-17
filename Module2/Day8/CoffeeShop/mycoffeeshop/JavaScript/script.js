// Day 8 Build

//When my stuff load what will you do? Display what I am grabbing as well
window.onload = function () {
    console.log("window loaded");
    displayMenuItems(menuItems);
}


//Prompt Based Login
// document.getElementById("cart-login").onclick=function loginPrompt() {
//     loginPrompt();
//     document.getElementById("cart-login").addEventListener("click", myFunction);
//     console.log("Button clicked!");
// }

// function loginPrompt() {
//     document.getElementById("cart-login").innerHTML = "I am clicked!";
// }

//Menu Array, Created Menu Listing with an Array 

let shoppingCart = [];
let menuItems = [
    {Name: 'Coffee', Description: 'Basic Coffee', Price: '$2.00'},
    {Name: 'Espresso', Description: 'Shot of Esspresso', Price: '$1.00'},
    {Name: 'Coffee & Milk', Description: '12 ounce cup of Coffee with Almond Milk', Price: '$7.00'},
    {Name: 'Coffee Beans', Description: '20 ounce Bag of Coffee Beans', Price: '$20.00'} 
    ];

    // document.getElementById("add-to-cart-button").onclick=function displayMenuItems(items) {
    // }

    //My Item Cards, Grabbing the Data, Displaying It, Shopping Cart Button
function displayMenuItems(items) {
    console.log("items", items);
    let menuDiv = document.getElementById("menu");
    for (let i = 0; i < menuItems.length; i++) {
        let menuItemDiv = document.createElement('div');
        menuItemDiv.innerHTML += "<p>" + menuItems[i].Name + "<br>" + menuItems[i].Description + "<br>" + menuItems[i].Price + "</p>"; //console.log(menuItems[i]); //put into the inner.HTML now that I see it is login.

        const itemButton  = document.createElement('button');
        itemButton.textContent = "Add to Cart";
        itemButton.onclick = function(item) {
            addToCart(menuItems[i]);
        };
        menuItemDiv.appendChild(itemButton);
        menuDiv.appendChild(menuItemDiv); 
        console.log(itemButton);    
    
        
    }
}
//Shopping Cart, Grabbing Data and Adding to Shopping Cart
function addToCart(item) {
   shoppingCart.push(item); //add the item to he shopping cart
   console.log("Updated shopping cart", shoppingCart);

   displayShoppingCart();  //update the content of the shopping cart display
//    console.log("Item added to cart:", item);
   
}

// Function to display the shopping cart
function displayShoppingCart(inShoppingCart) {
    console.log("shopping cart", inShoppingCart);
    
    // Get a reference to the shopping cart display element
    let displayCartDiv = document.getElementById("shoppingCartItem");
    
      displayCartDiv.innerHTML = '';
      for (let i = 0; i < shoppingCart.length; i++) {
        let shoppingCartItemDiv = document.createElement('div');
        
        shoppingCartItemDiv.innerHTML += "<p>" + shoppingCart[i].Name + "<br>" + shoppingCart[i].Description + "<br>" + shoppingCart[i].Price + "</p>";
    // Append the item representation to the shopping cart display
        displayCartDiv.appendChild(shoppingCartItemDiv);
    
      }
}

