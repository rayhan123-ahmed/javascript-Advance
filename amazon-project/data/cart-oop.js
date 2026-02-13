
function Cart(localStorageKey) {
    const cart = {
     cartItem : undefined,


    loadFromStorage : function() {
    this.cartItem = JSON.parse(localStorage.getItem(localStorageKey))
        
      if (!this.cartItem) {
        this.cartItem = [{
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
},
 
// Save cart in local storage 
   saveStorage() {
    localStorage.setItem('localStorageKey',JSON.stringify(this.cartItem))
  },
  // Add to cart funtion
 addToCart(productId) {
    // Using for each to catch all item quantity
    let matchingItem;

       this.cartItem.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingItem = cartItem
        }
       });


       if (matchingItem) {
        matchingItem.quantity += 1;
       }else{
        // push the object in a cart
        this.cartItem.push({
          productId:productId,
          quantity: 1,
          deliveryOption:'1' 
        });
       }
       this.saveStorage()
  },

  // This funtion has been created for remove the cart

  removeFromCart(productId) {
    
    const newcart = []
    this.cartItem.forEach((cartItem)=>{
      if (cartItem.productId !== productId) {
        newcart.push(cartItem)
      };
    });
    this.cartItem = newcart
    this.saveStorage()
  },
  
  // to update delivery option on the page

 updateDeliveryOption(productId,deliveryOptionId) {
        let matchingItem;

       this.cartItem.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingItem = cartItem
        }
       });
       matchingItem.deliveryOptionId = deliveryOptionId;

       this.saveStorage()
  }
};
return cart
}



const cart = Cart('cart-oop');
const businessCart = Cart('business-cart')
businessCart.loadFromStorage()
cart.loadFromStorage()




console.log(cart);
console.log(businessCart);
  





  
