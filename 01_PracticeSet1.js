// Create a variable of type string and try to add a number to it

let s = "Akshit"

s = s + 9; //  

console.log(s) ;


console.log(s);




// // Use typeof operator to find the datatype of the string in last question

console.log(typeof s);
console.log(typeof s+10)





// //Create a const object in js . Can you change it to hold a number later??

const item = { // item refers to(name of) below object
    colour : "red", // key value pairs
    weight : "70kg",
    contain : "apple",
}
 
console.log(item);  // No we cant assign a number to const object





// Try to add a new key to the const object in Problem3 were you able to do it ??

item['width'] = '50cm'; // Yes we can add a mew key in const object
item['length'] = '100cm';

console.log(item);
console.log(item.colour);
console.log(item['width']);





/*  Important Key points */

// 1) Primitive data types : 7(NNSSBBU)=> Number,null,boolean,string,symbol,bigint,undefined
// 2) Non primitive data type(referenced data-types): objects(key-value pairs) , functions and arrays!!! (in NPT our variables have references not values!!! like pointer!!!)
// 3) In case of var , update and redeclaration is possible (dont use it)
// 4) var is globally scoped , let and const is locally scoped
// 5) Objects(Ref_Data_types) are dynamic in nature (means at runtime we can add new properties/keys and values)
// 6) We can even insert functions , arrays and even objects inside values in the object!!!!

const obj = new Object();  // Declaring that obj is a object!!!

obj.size = 6;
obj.color = 'Yellow';
obj.contain = 'Fruits';
obj.fruits = ['Apple','Banana','Guava','Grapes','Orange','Peach'];

obj.take_fruit = function (){
    console.log('Hi I am taking one fruit from the object !!!!');
}

obj.put_fruit = ()=>{
    console.log('Hi I am putting one fruit into the object!!!!');
}

console.log(obj);
obj.take_fruit();
obj.put_fruit();



// // 7) this keyword refers to current object which is calling the method!!!!

 let laptop = {
      cpu :'i9',
      ram : '16GB',

      getConfig : function(){
        console.log("CPU : ",this.cpu);
        console.log("RAM : ",this.ram)
      }
 }


       laptop.getConfig();

       delete laptop.cpu; // use delete operator to delete any property of an object!!!

       console.log(laptop);


// 8) Everything in a javascript is a object!!!!

// 9) No new property can be added in Primitive data types(only predefined properties) , For Non-primitive types new properties can be added!!!

// 10) for every object(primitive as well as non-primitive) there exist some default predefined Constructor Function!!!

// 11) Remember Primitive values are immutable  , but Non-Pritimitive type values are mutable!!! (Very Important!!!)

// 12) In JavaScript, primitive values are read-only, whereas non-primitive values (objects/arrays, functions) are both read & write.

  /*  Important :  (https://techstacker.com/what-does-it-mean-that-primitive-values-are-immutuable-in-javascript/) */

      
     let ob = new Object({
        contain : 'balls',
        color : 'red'
       })

       console.log(ob);

       console.log(ob.constructor);



       // Adding new property to array(non-primitive type)!!!
       let arr = new Array();

       arr.push(4);
       arr.push(5);

       console.log(arr);

       arr['hi'] = 10; // hi is property not index , so will not increase the length of array!!!
      
       console.log(arr);
       console.log(arr.length);
       console.log(arr.hi);

       arr.length = 5;
       console.log(arr.length);
       console.log(arr);

       arr[50] = 50;
       console.log(arr);




       // PASS BY VALUE AND PASS BY REFERENCE : - 


       /* Pass by value */

       let num1 = 10;
       let num2 = num1; // pBv

       num1 = 11; //(change in num1 will not impact num2!!)
       console.log("\n\n",num2); // no change!!!



       /* Pass by reference */

       let ob1 = { size : 8 , color : 'blue'};

       let ob2 = ob1 // pBr (ob1 and ob2 refers to same object!!!)(no copying!!! only referencing!!!)
       
       ob1.size = 10; // changes in ob1 will impact ob2!!!

       console.log(ob2);


        // Three ways to copy the values from one object to other object(no referencing)!!!

                // Use spread operator to copy object!!! {...ob_name}

                //  (Note : Spread operator can only be used with Object and Array!!!! , If Object/Array contain any NPV then a reference will be created btw original and copied object/Array!!!)

                  let obb1 = {contain : 'fruits' , size :10}; // (Original Object!!!)
                  let obb2 = {...obb1}; // (Copied Object!!!) spread operator will help in creating new object copy at different Ml and then assign it to obb2!!!

                  console.log(obb2);

                  obb1.contain = 'eggs'; // changes done in obb1 will not impact obb2!!!

                  console.log(obb2);



                // Use Object.assign(target object,source ob1 , source ob2,....)

                 let oob1 = {color : 'red' , weight : '50kg' , Np : [1,2,3,4,5]};

                 let oob2 = {contain :'fruits' , country : 'india'};

                 let oob3 = Object.assign({},oob1,oob2); // if we use any object name in place of {} , then it will become the target(target mai bhi property add hojaegi!!!)
                  

                 console.log(oob3);


                 // Use loop to copy the values of one object to other!!!

                 let oobb1 = {contain : 'fruits' , size :10};

                 let oobb2 = new Object(); // or {}

                 for(let key in obb1)
                 {
                   oobb2[key] = obb1[key];
                 }

                 console.log(oobb2);


          

       

       







 

       


       






















