import express from 'express'
// import user from './routes/manage.js'
import gen from './routes/genimg.js';
import cors from 'cors'

const port = 5000;
const app = express()

app.use(express.json({ limit: "50mb" }));
app.use(cors())
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// })

// app.use('/user',user)
app.use('/genimg',gen)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});