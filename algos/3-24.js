const students = [
{
    firstName: "Jane",
    lastName: "Doe",
    habits: [
    "doesn't wash dishes",
    "falls asleep in lecture",
    "shows up early",
    ],
},
{
    firstName: "John",
    lastName: "Smith",
    habits: ["shows up late", "washes dishes", "helps peers"],
},
{
    firstName: "Arya",
    lastName: "Stark",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
},
{
    firstName: "Jon",
    lastName: "Snow",
    habits: ["shows up early", "helps peers", "washes dishes"],
},
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];

function santasNaughtyList(persons, badHabit) {}

//Finds a list of people whose habits contain the given bad habit.
//return an array of the firstname and the lastname of them.


function santasNaughtyListFunctional(persons, badHabit) {
    const newArr = [];
for(student of persons){
    if(student.habits.includes(badHabit)){
    newArr.push(student.firstName + ' ' + student.lastName)
    }
}
return newArr;


}
