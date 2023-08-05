// Use this console functions in browser console!!!

// console.log(console);
// console.info('Important Information');
// console.error("This is an error!!!");
// console.warn("This is a warning!!!!");
// console.clear();
// console.assert("5>8");
// console.table(object_ref);



/* Very important console object function ==> console.time() and console.timeEnd() */

// It can be used to find the time taken by loops or a particuar segement of code!!!!

console.time('Time taken by For-loop');

for(let i=1;i<99999999;i++)
{

}

console.timeEnd('Time taken by For-loop');