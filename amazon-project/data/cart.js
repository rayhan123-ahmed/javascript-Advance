export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2
},{
   productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}
]

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