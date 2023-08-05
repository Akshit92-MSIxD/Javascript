// DOM stands for Document Object Model
// When a web page is loaded , browser creates a DOM of that page!!!
// According to w3c everything is a node in DOM : text,element,attribute etc
// In DOM , every node(element only) is an object!!! 
// JS DOM methods can be used to manipulate/change DOM elements contents even attributes!!!!!
// The document object represents the web page
// To access any element in a HTML page , we always start with accessing the document object!!!
// How JS interact with HTML elements ==> because of DOM created by browser!!!!
// To manipulate DOM objects first we have to target the object/node then get/set the value!!!!
// Please refer to Notes section images for more info!!!!

function sam_func()
{
   const s1 = document.querySelector("#section-1");

   if(s1.style.color != 'red')
   {
    s1.style.color = 'red';
   }
   else
   {
    s1.style.color = 'yellow';
   }
}


sam_func();


