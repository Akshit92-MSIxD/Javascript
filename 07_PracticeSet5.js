// Create an array of numbers and take input from the user to add numbers to this array!!!

let arr=[1,2,3,4,5,6];

const prompt = require('prompt-sync')();

let count;

count = Number.parseInt(prompt('Enter the count of numbers to push in array  : '));

for(let c = 0 ; c<count;c++)
{
    let num = Number.parseInt(prompt("Enter the number : "));
    arr.push(num);
}

console.log(arr);




// Guess the number

let get_random_no = (min,max) => {
    return Math.floor((Math.random()) * (max-min) + min);
}

let num = get_random_no(1,100);

let chances = 0;
let guess;

do{
 guess = Number.parseInt(prompt("Guess the number : "));
 chances++;
 if(guess>num)
 {
    console.log("Sorry but the guessed no. is greater than the actual no.!!!!");
 }
 if(guess<num)
 {
    console.log("Sorry but the guessed no. is lesser than the actual no.!!!!");
 }

}while(guess!=num);


console.log('\nActual No. : ',num);
console.log(`Final score : ${100-chances}`);




