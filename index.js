const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const productRoute = require('./routes/product.route.js')

const app = express()
const port = '8080'
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/api/products",productRoute)

app.get('/',(req,res)=>{
    res.send("hello world")
})


const uri = "mongodb+srv://root:root@cluster0.o4aiwai.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
client.connect();
mongoose.connect("mongodb+srv://root:root@cluster0.o4aiwai.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('connected')
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
}).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    
