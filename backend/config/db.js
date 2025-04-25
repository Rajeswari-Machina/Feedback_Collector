const mongoose = require('mongoose');
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI,clientOptions);
    console.log("mongoDB connected")
  }catch(error){
    console.error('DB connection failed',error);
    process.exit(1);
  }
}
module.exports = connectDB;