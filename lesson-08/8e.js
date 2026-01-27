    const product1 = {
        name: 'basketball',
        price: 2000
    }
    const product2 = {
        name: 'footbal',
        price : 99
    }
    const product3 = {
       name: 'basketball',
        price: 2000
    }
    


    function isSameProduct(product1,product2) {
         if(product1.name === product2.name && product1.price === product2.price){
             return true
         }else{
            return false
         }
    }

    console.log(isSameProduct(product1,product2))
    console.log(isSameProduct(product1,product3))