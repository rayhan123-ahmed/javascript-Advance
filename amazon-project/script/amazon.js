// Save The products data on a varibale
  // this data store in file name: amazon-project/data/product.js

  // import variable from another file
    import {cart,addToCart} from "../data/cart.js";
    import{products} from "../data/products.js"
    import { formatCurrency } from "./utils/money.js";

 // Genarte html
 let productHTML =''

  products.forEach((product)=>{
    productHTML += `
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl ()}">
            <div class="product-rating-count link-primary">
              ${product.rating.counts}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
    
  })

  document.querySelector('.js-product-grid').innerHTML = productHTML


// update cart quantity funtion
 function updateCartQuantity() {
   
      // Total cart quanity
       let cartQuantity = 0;

       cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
       });
    
      //To show cart quantity on the page header
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
 }

// Acces all the add to cart button and has done some work
  document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
      // data set atribute
      const productId = button.dataset.productId;
       
      // Add to cart
      addToCart(productId)
    
    // update cart quantity
      updateCartQuantity()
    });
  });


