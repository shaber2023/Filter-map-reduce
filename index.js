const myarray = ['java','javaScript','python','c++','go']

myarray.map((item,index,array)=>{
    // return console.table([item,index,array])
    // return console.log(array)
    return console.log(`this is my item ${item} this is my index ${index}`)
})