const mongoose = require('mongoose');
function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT, {
        
    })
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });
}   
module.exports=connectToDb;