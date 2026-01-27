    const product1 = {
        name: 'Footbal',
        price: 3000
    }
    const product2 = {
        name : 'bat',
        price: 1999
    }
  function comaprePrice(product1,product2){
      if (product1.price < product2.price) {
        return product1
      }else{
        return product2
      }
  }

  console.log(comaprePrice(product1,product2));
  