let arr = [1,2,3,4,5,6];


// .toString() method
let str = arr.toString();
console.log(str);


// .join() method
let j = arr.join("and"); // 
console.log(j,typeof j);


// pop() method
arr.pop(); // pop() returns the popped element from last index of array!!!!
console.log(arr);


// push() method
let len = arr.push("akshit");
console.log(arr,len);


// shift() method : removes initial element and returns it
let num = arr.shift();
console.log(num,arr)


// unshift() method : adds new element at initial index and returns new length
let length = arr.unshift(1);
console.log(arr,length);


// delete operator (not a method!!!) , does not change the length , makes a particular field undefined!!!
delete arr[2]; 
console.log(arr[2]);


// concat() method to join two or more arrays!!!
let arr2 = [10,20,30,40,50];
let arr3 = ['Ayush','Akshit','Vinay','Priyanshu'];

let new_arr = arr.concat(arr2,arr3);// does not change individual array elements!!!
console.log(new_arr);


//sort() method ( sort elements alphabetically!!! considers element as string!!!)
let a = [551,22,3,14,5,6,7,8,229]
a.sort();
console.log(`\nAlphabetical order of a : ${a}`);

let compare1 = (a,b) =>{
    return a-b;
}

let compare2 = (a,b) =>
{
    return b-a;
}

a.sort(compare1);
console.log(`Ascending order of a : ${a}`);

a.sort(compare2);
console.log(`Descending order of a : ${a}\n\n`);




// reverse() method , use to reverse all elements of array



// splice() method , use to add set of elements in a array , returns the array of deleted elements!!!!
let array = [1,2,3,4,5,6,7,8];
let neg =[-1,-2,-3,-4,-5];
console.log(array);
let deleted_values = array.splice(3,2,'Inserted1','Inserted2',...neg); // First parameter => index , Second parameter => no. of elements to be deleted , Remaining parameters => elements inserted
console.log("Deleted values array : ",deleted_values,);
console.log("-------",array,"\n\n");



// slice() method
let aray = [10,20,30,40,50,60,70,80]
let sliced_arr1 = aray.slice(2);
console.log(sliced_arr1);
let sliced_arr2 = aray.slice(2,6);
console.log(sliced_arr2);



// map() method creates a new array by performing some operation on each array element and returns it!!!
let num2 = [1,2,3,4,5,6];
let neww_arr = num2.map((value)=>{  // (value,index,array)!!!
    return value+10;
}) 

console.log("\n",neww_arr);
 


// filter() method creates a new array by filtering an array with values that passes a test!!!!
let new_ar = num2.filter((value)=>{
    return value>=4;
})

console.log(new_ar);


//reduce() method reduces a array to single value based on callback function provided in reduce() and returns it!!!!
let mul = num2.reduce((acc,cv)=>{ // (accumulator,cvalue,cindex,array)
    return acc*cv;
})

console.log(mul);




























