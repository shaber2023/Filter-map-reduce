const myarray = ['java','javaScript','python','c++','go']
const newArray = [1,2,3,4,5,6,7,]

//same output sprade oparetor
const data = [...myarray,...newArray];
console.log(data)

//same output concat oparetor
const mydata = myarray.concat(newArray);
console.log(mydata)

