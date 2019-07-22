var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

  function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}



function viewCart() {
  var array = [];

  for ( let i = 0; i < cart.length; i++) {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;}

  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }

  if (cart.length ===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    let lastItem = array.pop();
    return `In your cart, you have ${array.join(', ')}, and ${lastItem}.`
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
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

 

function placeOrder(cardNumber) {
  var emptyArray = [];
  if (ccNum === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
    setCart(emptyArray)
  }
}