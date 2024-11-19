import readlineSync from 'readline-sync';

console.log("Miles to Kilometers Converter: \n");

let mi = readlineSync.question("Enter the value in miles: ");

let km = mi / 0.62137;

console.log(mi + " mi is equal to " + km + " km");