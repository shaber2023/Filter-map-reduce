const numbers = [1,2,3,4,];

// const newNumbers = numbers.reduce((pre,curr)=>pre+curr,10);
const newNumbers = numbers.reduce(function(preValue,currValue){
    console.log(`this is preValue ${preValue} and this is currValue ${currValue}`)
    return preValue+currValue
},0)

console.log(newNumbers)