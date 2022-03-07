console.log("***Question 1***")
//Prints hello 
var hello = 'world';                                 
console.log(hello);        

console.log("***Question 2***")
// prints magnet, console log is in the test()function.

var needle = 'haystack';

function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

console.log("***Question 3***")
//Prints super cool the print() function was not called

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

console.log("***Question 4***")
// Prints chicken half-chicken no console log of food after last declaration
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

console.log("***Question 5***")
// With creating mean as a function chicken fish chicken chicken.
mean();
console.log(food);
function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

console.log("***Question 5***")
console.log("***Question 6***")
console.log("***Question 7***")