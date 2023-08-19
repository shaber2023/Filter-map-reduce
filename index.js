const myarray = ['java','javaScript','python','c++','go']

//print array data
myarray.map((item)=>console.log(item))
myarray.filter((item)=>console.log(item))
myarray.forEach((item)=>console.log(item))
for (const iterator of myarray) {
    console.log(iterator)
}

// forEach callbackfnction value: string, index: number, array: string
myarray.forEach(function(item,index,array){
    console.log(item)
})

myarray.filter((item)=>{
    console.log(item)
})

const myNumber = [2,4,6,9,54,32,95,22,91]

const newValue = myNumber.map((item)=>item+10);
console.log(newValue)

const Number = [2,4,6,9,54,32,95,22,91]

//chaining
const Value = Number.map((item)=>item+10).filter((item)=>item>50);
console.log(Value)