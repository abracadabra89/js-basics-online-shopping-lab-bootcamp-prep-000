var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

  function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({item : price});	 
  console.log(item +' has been added to your cart.');	
  return cart;	  
}	


function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var newArr = [];
    for (var i = 0; i < cart.length; i++) {
      var price = Object.keys(cart[i]);
      for (let price in cart[i]) {
        newArr.push(`${Object.keys(cart[i])} at $${cart[i][price]}`)
      }
    }
    return console.log("In your cart, you have " + newArr.join(", ") + ".");
  }
}
function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return console.log("That item is not in your cart.");
}


function total() {
  if (cart.length !== 0) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        sum += cart[i][item];        
      }
    }
    console.log(`The total value is ${sum}`);
    
    return sum;
  }
  
  return -1; // Could be 0, this is up to you.
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  } else {
    return console.log("Sorry, we don't have a credit card on file for you.");
  }
}
