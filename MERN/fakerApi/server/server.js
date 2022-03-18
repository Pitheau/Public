const express = require("express");
const app = express();
const port = 8000;



app.get("/api", (req, res) => {
    res.json({ message: "Hello World you big old world" });
});

class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
        }
    }

app.listen( port, () => console.log(`Listening on port: ${port}`) );