// Use logical operators to find whether the age of a person lies between 10 and 20

const prompt = require('prompt-sync')(); /* Note : prompt does work in browser based environments!!!*/


let age = prompt("Enter the age : ");

age = Number.parseInt(age); // convert string to int!!!

if(age>=10 && age<=20)
{
    console.log("Yes the age lie between 10 and 20 and age is : "+age);
}
else
{
    console.log("No the age does not lie between 10 and 20 and age is : ",age);
}


let drive = age>18 ? "You can drive" : "You cant drive";

console.log(drive);
alert('HIIIIII');


/* key Points*/

// Every literal is expression like 7; or "Akshit" or 7+8 , Expression is a block of code which ends up evaluating to a value!!!
// Note : Statements and Expressions are different things in JS , Expression is a subset of Statement!!!
// We can use a expression wherever statement is expected!!! but vice versa is not true!!!
// Statements are block of code which performs some actions!!!
// Some Primitive types contains parse functions for converting the string type to another type!! 
//  alert() and prompt() does not work in (Vscode) , works only in browser based environments!!!
// a**b means a^b(a ki power b) , a===b and a!==b means checking the type and value also !!!
// 7=='7' ==>true but 7==='7' ==>false