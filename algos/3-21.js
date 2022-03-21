// "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.


function insert(tableName, columnValuePairs) {
let string1 = ("INSERT INTO " + tableName + (" ("))
let string2 = ") VALUES ("
let arr = entries(columnValuePairs)
for(let i = 0; i < arr.length; i++){
    if(i !== arr.length - 1){
    string1 = string1 + arr[i][0] + ", "
    } else {
    string1 = string1 + arr[i][0]
    }
    if(i !== arr.length - 1){
    if(typeof(arr[i][1]) === 'string'){
        string2 = string2 + "'" + arr[i][1] + "'" + ", "
    } else {
        string2 = string2 + arr[i][1] + ", "
    }
    } else {
    if(typeof(arr[i][1]) === 'string'){
        string2 = string2 + "'" + arr[i][1] + "'"
    } else {
        string2 = string2 + arr[i][1]
    }
    }
}
string1 = string1 + string2 + ");"
return string1
}

console.log(insert(table, insertData1))
console.log(insert(table, insertData2))
//Generates a SQL insert statement from the inputs
// Tip: string interpolation (`) will make it easy to add variables into a string or to add quotations without needing to escape them.

function insertFunctional(tableName, columnValuePairs) {
//Bonus: Write a 2nd solution focusing on functional programming using built in methods
}