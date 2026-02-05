export const cart = []

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
          quantity: 1
        });
       }
  }