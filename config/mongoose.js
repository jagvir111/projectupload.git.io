const mongoose = require('mongoose');
// connecting to mongoose
mongoose.connect("mongodb+srv://singhjv11:959GvObKK513HvBB@cluster0.z4dujhk.mongodb.net/?retryWrites=true&w=majority");
// mongoose database connection
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

module.exports=db;