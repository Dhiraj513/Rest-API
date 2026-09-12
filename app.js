const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("I am Available");
});

//middleware to set router
app.use("/api/products", products_routes );

const start = async () => {
    try {
        app.listen(PORT, () => {

            console.log(`${PORT} Yes i am connected`);
            console.log();
        });
    } catch (error) {
        console.log(error); 
        
    }
};