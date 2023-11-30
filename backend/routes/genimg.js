import express from "express";
import {
  connectDbGen,
  ourmodel
} from "../components/img_gen.js";

const router = express.Router();
connectDbGen();

import {
  v2 as cloudinary
} from 'cloudinary';

cloudinary.config({
  cloud_name: 'dhudcf11t',
  api_key: '524947196344864',
  api_secret: 'tebm4Umkq5tx0BHiSPyVn52g1rY'
});

router.post('/', async (req, res) => {
  const {
    name,
    img,
    prompt
  } = req.body
  cloudinary.uploader.upload(img, {
      public_id: name
    },
    async function (error, result) {
      if (error) {
        console.log(error)
      } else {
        const url = result.secure_url
        console.log(url)
        // res.send(url)

        const newImg = new ourmodel({
          name,
          prompt,
          url
        })
        await newImg.save().then(() => res.send("Complete add new image"))
          .catch((err) => {
            res.send(err)
          })
      }
    });
})

router.get("/", async (req, res) => {
  const allImg = await ourmodel.find()
  res.send(allImg)
})

export default router;