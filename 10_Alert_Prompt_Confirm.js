alert('Enter the value of a : ');
// let prompt = require('prompt-sync')();

let a = prompt('Enter here : ','83');

let write = confirm("Do you want to write value of a to the page???"); // returns true for ok , false for cancel!!!

write?document.write(a) : document.write("Please press ok to write the value to the page!!!");


// Limitation of above methods : 

 //exact look and location of message determine by the browser!!!!
 // These methods blocks the main-execution-thread of JS!!!
 // Old school look , not modern!!! , instead of these we can use Modals!!!


