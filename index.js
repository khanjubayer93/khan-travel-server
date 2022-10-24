const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

const productsCollection = require("./fakeData/product.json")

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const product = productsCollection?.find(p => p.id == id)
    if(!product){
        res.send('product not found')
    }
    res.send(product)
})

app.get('/allproduct', (req, res) => {
    res.send(productsCollection)
})

app.get('/', (req, res) => {
    res.send("server is live now")
})



app.listen(port, () => {
    console.log('server is running', port)
})

module.exports = app;

