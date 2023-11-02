const mongoose = require('mongoose');
require('dotenv').config();
// connecting to mongoose
console.log(process.env.mongodburl);
mongoose.connect(process.env.mongodburl)
.then(
    ()=>{
        console.log("database connected");
    },
    (err)=>{
        console.log(err);
    }
)


// // mongoose database connection
// const db = mongoose.connection;
// db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

// db.once('open',function(){
//     console.log('Connected to Database :: MondoDB');
// });

module.exports=mongoose;