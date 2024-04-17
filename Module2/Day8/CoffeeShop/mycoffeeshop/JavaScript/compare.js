//Define global variables at the top.  Global meaning they will be used in multiple places
let shoppingCart = [];
let menuItems = [
    {Name: 'Coffee', Description: 'Basic Coffee', Price: '$2.00'},
    {Name: 'Espresso', Description: 'Shot of Esspresso', Price: '$1.00'},
    {Name: 'Coffee & Milk', Description: '12 ounce cup of Coffee with Almond Milk', Price: '$7.00'},
    {Name: 'Coffee Beans', Description: '20 ounce Bag of Coffee Beans', Price: '$20.00'} 
];

window.onload = function () {
    console.log("window loaded");
    displayMenuItems(menuItems);
}


//both functions are very similar.  displayMenuItems already has a populated array to pull data from onload so you just went through and created elements to display.  perfect!
function displayMenuItems(items) {
    console.log("items", items);
    let menuDiv = document.getElementById("menuItem");
    for (let i = 0; i < menuItems.length; i++) {
        let menuItemDiv = document.createElement('div');
        menuItemDiv.innerHTML += "<p>" + menuItems[i].Name + "<br>" + menuItems[i].Description + "<br>" + menuItems[i].Price + "</p>";

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

//i put the shoppingCart array at the top. since it is globla, no need to pass it into the displayShoppingCart function.
function addToCart(item) {
   shoppingCart.push(item); 
   console.log("Updated shopping cart", shoppingCart);
   displayShoppingCart()
}

//i think what was getting you messed up in this function was you had three 'variables' you were messing with.  you passed in the shoppingCart argument to the inShoppingCart parameter, but never used that.  then you also had the global shoppingCart variable you were looping through. and in the forEach you were trying to get data from menuItems

//probably just got off track a bit on what you were trying to do.  

//this function should only do one thing.  displayShoppingCart.  not add/remove items to the shoppingCart. not mess with menuItems.  

//it should look at the shoppingCart and display that on screen

//try to make your functions the least complicate as possible. the more separation of concerns you have, the easier it will be to debug.

//if you start to get confused about what a function is doing, it's probably too big.
function displayShoppingCart() {
    console.log("shopping cart", shoppingCart);
    
    let displayCartDiv = document.getElementById("shoppingCartItem");
    
    //clear the cart
    displayCartDiv.innerHTML = "";
    for (let i = 0; i < shoppingCart.length; i++) {
        let shoppingCartItemDiv = document.createElement('div');
        
        shoppingCartItemDiv.innerHTML += "<p>" + shoppingCart[i].Name + "<br>" + shoppingCart[i].Description + "<br>" + shoppingCart[i].Price + "</p>"; 
 
        displayCartDiv.appendChild(shoppingCartItemDiv); 
    }
}