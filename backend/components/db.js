import mongoose from 'mongoose';

async function connectDb() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(()=> console.log('Connected to MongoDB'))
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  country: String
})

const ourmodel = mongoose.model("user", userSchema);

export {connectDb, ourmodel}