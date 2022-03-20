const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

const users = []
class Users {
    constructor() {
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber =faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this._id = faker.datatype.uuid()
        this.name = faker.commerce.productName();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state =faker.address.state();
        this.zipCode =faker.address.zipCode();
        this.country =faker.address.country();
    }
}

//Routes
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//Post Create User
app.post("/api/users/new", (req, res) =>{
    const newUser = new Users()
    users.push(newUser)
    res.json(newUser)
})
app.post("/api/companies/new", (req, res) =>{
    const newCompany = new Company()
    users.push(newCompany)
    res.json(newCompany)
})

console.log(new Users());
console.log(new Company());


app.listen( port, () => console.log(`Listening on port: ${port}`) );