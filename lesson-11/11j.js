function addArrays(arrays1,arrays2) {
    const result = []

    for (let i = 0; i < arrays1.length; i++) {
        result.push(arrays1[i]+arrays2[i])
    }
    return result
}

console.log(addArrays([1,1,2],[1,1,3]));
console.log(addArrays([1,2,3],[4,5,6]));
