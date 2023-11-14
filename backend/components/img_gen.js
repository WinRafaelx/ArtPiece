import mongoose from 'mongoose';

async function connectDbGen() {
  await mongoose.connect('mongodb://127.0.0.1:27017/genimg').then(()=> console.log('Connected to MongoDB'))
}

const userSchema = new mongoose.Schema({
  name: String,
  prompt: String,
  url: String,
})

const ourmodel = mongoose.model("img", userSchema);

export {connectDbGen, ourmodel}