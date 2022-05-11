// Setup cart
let cart;



// check if localstorage data already exists
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
} else {
    cart = [];
}


// update cart
function updateCart() {
    console.log("updateCart");
    // total!
    let total = 0;
  
    // get the cart data from localstorage and parse it back as object
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    // remove all children from cart__items
    document.querySelector('.cart__items').innerHTML = "";


    // loop through all products in cart
    for (let product of cart) {
        console.log(product);

        // 1) create li.cart__item
          let cart__item = document.createElement("li");
          cart__item.setAttribute("class", "cart__item");

        // 2) create h3.cart__name
          let cart__name = document.createElement("h3");
          cart__name.setAttribute("class", "cart__name");
          cart__name.textContent = product.name;
              // append to cart__item
          cart__item.appendChild(cart__name);


        // 3) create h3.cart__price
          let cart__price = document.createElement("h3");
          cart__price.setAttribute("class", "cart__price");
          cart__price.textContent = product.price;
              // append to cart__item
          cart__item.appendChild(cart__price);


        // 4) add price to total
          total = total + product.price;
          // Round the price to 2 decimals. See https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8
          total = Math.round(total*100)/100;

        // 5) append element
          document.querySelector('.cart__items').appendChild(cart__item);
    }
  // update total
  document.querySelector('.cart__total').textContent = total;
}

// delete all items in cart
const deleteAllButton = document.querySelector('.cart__deleteAll');
deleteAllButton.addEventListener('click', ()=> {
  console.log('delete all from cart');
  // remove from localStorage
  localStorage.removeItem('cart');
  
  // reset cart
  cart = [];
  
  // update total
  document.querySelector('.cart__total').textContent = 0;
  
  // run the update of cart
  updateCart();
});

// update the cart on load
updateCart();