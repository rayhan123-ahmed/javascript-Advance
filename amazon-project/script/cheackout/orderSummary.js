// import variable from another file
import { cart,removeFromCart,updateDeliveryOption } from "../../data/cart.js";
import{products,getProduct} from "../../data/products.js"
import { formatCurrency } from "../utils/money.js";
import {deliveryOptions,getDeliveryOption} from "../../data/deliveryOption.js"
import { renderPaymentSummary } from "./paymentSummery.js";

// this path coming from external library
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'


// this funtion has been created for rnder all the code
export function renderOrderSummary() {
   // Genarte HTML
let cartsummeryHTMl = ''

cart.forEach((cartItem)=>{
    // acces the data from products file 
  const productId = cartItem.productId


    let matchingProduct = getProduct(productId)

//  To get full delivery option
const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);


const today = dayjs();
const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
const dateString = deliveryDate.format('dddd, MMMM D');



   cartsummeryHTMl+= `
    <div class="cart-item-container
    js-cart-item-container
    cart-item-container-${matchingProduct.id} ">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name} 
            </div>
            <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity js-product-quantity-${matchingProduct.id}">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link 
                 js-delete-link-${matchingProduct.id}
                "
                 data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>

           ${deliveryOptionsHTML(matchingProduct,cartItem)}

          </div>
         </div>
        </div>
    `;
});

// Genarate the delivery options

  function deliveryOptionsHTML(matchingProduct,cartItem) {
    let html = ''

    deliveryOptions.forEach((deliveryOption)=>{
    const today = dayjs()
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D' )


    const priceString = 
    deliveryOption.priceCents === 0
     ? "FREE"
     : `${formatCurrency(deliveryOption.priceCents)} -`
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

       html+=`
           <div class="delivery-option js-delivery-option" 
           data-product-id="${matchingProduct.id}"  data-delivery-option-id="${deliveryOption.id}"

           >
                <input type="radio"
                 ${isChecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${priceString} shipping
                </div>
                </div>
            </div>
        `
    });

    return html;
  };

// This section helps to show evrything on the page
  document.querySelector('.order-summery-js').innerHTML = cartsummeryHTMl;

// Making Delete button intarective
document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      console.log(productId);
      
      // Remove from cart data
      removeFromCart(productId);

      // Remove from DOM
      const container = document.querySelector(
        `.cart-item-container-${productId}`
      );
      if (container) {
        container.remove();
        renderPaymentSummary()
      }
    });
  });

// to update the delivery option

document.querySelectorAll('.js-delivery-option')
  .forEach((element) => {
    element.addEventListener('click', () => {
      const { productId, deliveryOptionId } = element.dataset;

      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary()
      renderPaymentSummary()
    });
  });
}


