
let num = [1,2,3,4,5,6];

// forEach loop (calls a function , once for each array element)
num.forEach((element,Index)=>{     //(value,index,array)!!!
    console.log(element*element,Index);
})

//  Array.from() is used to create an array from other string or Html Collection and returns it!!!
let str = "Happy";
 let arr = Array.from(str);
console.log(arr);

// for of loop
for(let item of num)
{
    console.log(item);
}

//for in loop
for(let key in num)
{
    console.log(key);
}







