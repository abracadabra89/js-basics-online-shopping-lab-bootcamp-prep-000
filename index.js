var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

  function addToCart(item) {
 var newItem = {[item]: Math.floor( Math.random(1, 101) * 100 ) };
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }
  const itemsWithPrices = [];

  for (let i = 0; i < cart.length; i++) {
    var itemNames = Object.keys(cart[i]);
    var itemName = itemNames[0];
    var itemPrice = cart[i][itemName]

    itemsWithPrices.push(`${itemName} at $${itemPrice}`)
  }
if (itemsWithPrices.length === 1) {
    return console.log(`In your cart, you have ${itemsWithPrices.join()}.`)
  } else if (itemsWithPrices.length === 2) {
    return console.log(`In your cart, you have ${itemsWithPrices[0]} and ${itemsWithPrices.slice(-1)}.`)
  } else {
    return console.log(`In your cart, you have ${itemsWithPrices.slice(0,-1).join(', ')}, and ${itemsWithPrices.slice(-1)}.`)
  }

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
