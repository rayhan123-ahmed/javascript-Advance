function removeEgg(foods) {
    return foods.filter((food)=> food !== 'egg')
}

console.log(removeEgg(['apple','orange','egg']));
