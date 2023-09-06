const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://kartikpoojary8:kartik@kartik.p9a2qyy.mongodb.net/doubt23?retryWrites=true&w=majority";

const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
