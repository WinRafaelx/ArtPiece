import mongoose from 'mongoose';

async function connectDbGen() {
  // set connection to mongodb
  await mongoose.connect('mongodb://127.0.0.1:27017/GenImg').then(()=> console.log('Connected to MongoDB'))
}

const userSchema = new mongoose.Schema({
  name: String,
  prompt: String,
  url: String,
})

const ourmodel = mongoose.model("Img", userSchema);

export {connectDbGen, ourmodel}