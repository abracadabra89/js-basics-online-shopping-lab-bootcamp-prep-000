var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var object = {
    [itemName]: Math.floor(Math.random(1, 100) * 100)
  };
  cart.push(object);
  console.log(`${itemName} has been added to your cart`);
  return cart;
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
  if (cardNumber === undefined) {
    return ("Sorry, we don't have a credit card on file for you.");
  } else {
  
    var sum = total();
    if (sum) {
    console.log(`Your total cost is $${sum}, which will be charged to the card ${cardNumber}`);
    } else {
      console.log("Your shopping cart is empty.")
    }
    cart = [];
    return cart;
  }
}
