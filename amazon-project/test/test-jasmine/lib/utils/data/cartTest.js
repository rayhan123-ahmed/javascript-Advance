import { addToCart,cart,loadFromStorage } from "../../../../../data/cart.js";


describe('Test suit: add to cart',()=>{
    it('adds and existing product to the cart',()=>{
         const productId = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';

        spyOn(localStorage, 'setItem')

     spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([{
          productId:productId,
          quantity: 1,
          deliveryOption:'1' 
        }])
     })   
      loadFromStorage()

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
      expect(cart.length).toEqual(1)
      expect(localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
      expect(cart[0].quantity).toEqual(2)
    });

    it('adds a new product to the cart',()=>{
      spyOn(localStorage, 'setItem')

     spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([])
     })   
      loadFromStorage()

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
      expect(cart.length).toEqual(1)
      expect(localStorage.setItem).toHaveBeenCalledTimes(1)
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
      expect(cart[0].quantity).toEqual(1)
    });
});
