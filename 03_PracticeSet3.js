// Write a object  to print the marks of a student in an object using for loop and for in loop

let marks = {
    harry : 98,
    rohan : 70,
    aakash : 75,
    akshit : 100 
}


/* Using for loop */

for(let i=0 ; i < Object.keys(marks).length ; i++)  //  Object.keys(marks) will return the  array of keys of object referred by marks!!!!!
{
      console.log("Marks of ",Object.keys(marks)[i]," is ", marks[Object.keys(marks)[i]]);
}


/* Using for-in loop */

for(let key in marks) // in is used to get the keys of object!!!!
{
    console.log("Marks of ",key," is ",marks[key]);
}

/* use function to find the mean of 4 no.s */

const mean = (a,b,c,d)=>{   // function mean(a,b,c,d) {}
    return (a+b+c+d)/4;
}

console.log('Mean of 4,5,6,7 is ',mean(4,5,6,7));




/*key points */

// Function can be made as a variable in js!!!!
// let func_name = () => {} , in this case func_name can be assigned different block of code afterwards!!!
// function func_name() {} , in this case  func_name cant be assigned different block of code once it is defined !!!





// factory function (returns object!!!)

function get_object_2(size,contain,color)
{
       return {
        size : size,
        contain : contain , 
        color : color
       }
}


ob1 = get_object_2(10,'chocos','brown');
console.log(ob1);





// Constructor function (returns object referred by 'this' keyword!!!)

function Laptop(ram,cpu,cost)
{
    this.ram = ram;
    this.cpu = cpu;
    this.cost = cost;

    this.getConfig = function()
    {
        console.log("RAM : ",this.ram);
        console.log("CPU: ",this.cpu);
        console.log("COST : ",this.cost);
        return "return value";
    }

    return this; // optional!!(concept!!)
}

const laptop1 = new Laptop('16GB','i7',50000); // new keyword creates a empty object which is referred by this keyword!!!
const laptop2 = new Laptop('8GB','i3',35000);

laptop1.getConfig();
laptop2.getConfig();

let value = new Laptop().getConfig(); // object ke function ko access krne ki short form!!!!
console.log(value);
