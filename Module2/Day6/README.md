# Day 6

## objects

- objects allow us to group multiple values together // like in car app, the cars would be an object.
- we can use any data type as a value in an object // think of a container like in the real world. it is just a set of key value pairs. The difference between container and array is how we access them. To access array items via the index oe someArray[0]. In an object order is not relevant and not stable. To access in object, we access by a key "give the value of what this key holds". Example: const name = shoppingCarObject.name;<-- for non quote keys or const nameAlso = shoppingCartObject['name']; <-the second for when the key is not using normal key pair rules or quoted keys. Need to watch video again for this part.


- once we make an object we can assign it to a variable
- we can then update the object from the variable
- we can also add new properties to the object
- keys are strings but must be valid identifiers to use shorthand (no quotes)
- property access via dot notation (if identifier) 
- property access via bracket notation (either identifier or string)

## creating objects
- object literals, example is the const shoppingCartObject on today's html.
- constructor functions - Example, the convention is the use a capital letter in the function name. w3 schools has a good example. <---use for my shopping cart, watch lecture video.
- Object.create() -- MDN document has a good example, watch lecture video.
- Classes -- if constructor gets too large, is a good idea to use a class. Very similar to constructor functions and can have constructor functions in them. Watch lecture video.

## objects in arrays

- one of the most useful data types in js is an array of objects
- a similar data type you can think of is an excel spreadsheet example: const rows [] <- would be an empty spreadsheet -- our dragon game we wrote these, out location arrays. Watch lecture video example!!
- revisiting our shopping cart
- array of objects with arrays in the object! (blog post with comments) example:
const posts = [] see lecture video
<!-- check day6 curriculum git for posted examples too -->

## record collections

- similar to array of objects, but the access is a string known is the key, not the position

## exercise

- update your coffee shop site shopping cart to use objects
- you should have a name, price, and quantity for each item
- if an item is already in the cart, you should update the quantity when they click the add to cart button again
- try to use this method to update the quantity: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find (if you are using an array of objects)
- You could also use an object of objects with the key being the name of the shopping cart item

<em>Time allowing we can work through some of the Date object FCC exercise</em>
java.info tutotial too!

