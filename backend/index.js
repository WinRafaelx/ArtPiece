import express from 'express'
import gen from './routes/genimg.js';
import cors from 'cors'

const port = 5000;
const app = express()

app.use(express.json({ limit: "50mb" }));
app.use(cors())

app.use('/genimg',gen)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});