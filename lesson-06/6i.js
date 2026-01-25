 const randomNumber = Math.random();
    console.log(randomNumber);
    let result;

    if (randomNumber < 0.5) {
           result = 'heads';
        }else{
            result = 'tails'; 
    }
    console.log(result);

    const guess = 'tails'

    if (guess === result) {
        console.log('you win!');
        
    }else{
        console.log('you lose');
    }

    

