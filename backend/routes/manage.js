// import express from "express";
// import {
//   connectDb,
//   ourmodel
// } from "../components/db.js";

// const router = express.Router();
// connectDb();

// router.post('/info', async (req, res) => {
//   const {
//     name,
//     email,
//     city,
//     country
//   } = req.body
//   const user = new ourmodel({
//     name,
//     email,
//     city,
//     country
//   })
//   await user.save().then(() => res.send("Complete add new user"))
//     .catch((err) => {
//       res.send(err)
//     })
// })

// router.get('/', async (req, res) => {
//   const users = await ourmodel.find()
//   res.send(users)
// })

// router.put('/update', async (req, res) => {
//   const {
//     replacename,
//     replaceemail,
//     newname,
//     newemail,
//     newcity,
//     newcountry
//   } = req.body
//   await ourmodel.updateOne({
//       name: replacename,
//       email: replaceemail
//     }, {
//       name: newname,
//       email: newemail,
//       city: newcity,
//       country: newcountry
//     })
//     .then(() => res.send("Complete update user"))
//     .catch((err) => {
//       res.send(err)
//     })
// })

// router.delete('/delete', async (req, res) => {
//   const {
//     name,
//     email
//   } = req.body
//   await ourmodel.deleteOne({
//     name: name,
//     email: email
//   }).then(() => res.send("Complete delete user")).catch((err) => {
//     res.send(err)
//   })
// })

// export default router;