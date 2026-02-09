export let cart = JSON.parse(localStorage.getItem('cart'))
  
if (!cart) {
  cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
  deliveryDays: '1',
  deliveryOptionId: '1'
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryDays: '2',
  deliveryOptionId: '2'
}]
}; 

  
// Save cart in local storage 
  function saveStorage() {
    localStorage.setItem('cart',JSON.stringify(cart))
  }


// Add to cart funtion
export function addToCart(productId) {
    // Using for each to catch all item quantity
    let matchingItem;

       cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingItem = cartItem
        }
       });


       if (matchingItem) {
        matchingItem.quantity += 1;
       }else{
        // push the object in a cart
        cart.push({
          productId:productId,
          quantity: 1,
          deliveryOption:'1' 
        });
       }
       saveStorage()
  }

  // This funtion has been created for remove the cart

 export function removeFromCart(productId) {
    
    const newcart = []
    cart.forEach((cartItem)=>{
      if (cartItem.productId !== productId) {
        newcart.push(cartItem)
      };
    });
    cart = newcart
    saveStorage()
  }

  // to update delivery option on the page

 export function updateDeliveryOption(productId,deliveryOptionId) {
        let matchingItem;

       cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingItem = cartItem
        }
       });
       matchingItem.deliveryOptionId = deliveryOptionId;

       saveStorage()
  }