
function countPostiveNumbers(nums) {
    let positiveNumbers = 0

    nums.forEach((num)=>{
        if (num > 0) {
            positiveNumbers++
        }
    });
    return positiveNumbers
}

 console.log(countPostiveNumbers([-2,3,5]));
 console.log(countPostiveNumbers([-5,8,-6,77,0,]));
 
 