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

console.log("***Question 6***")
// undelared rock r&b disco

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

console.log("***Question 7***")
// Will print san jose seattle burbank san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

console.log("***Question 8***")
// name chicago students 65, hiring true then breaks do to attempted reassignment of a const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}