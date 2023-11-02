const mongoose = require('mongoose');
require('dotenv').config();
// connecting to mongoose

mongoose.connect("mongodb+srv://singhjv11:easysapassword@cluster0.rrqcq8i.mongodb.net/habitapp?retryWrites=true&w=majority")
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