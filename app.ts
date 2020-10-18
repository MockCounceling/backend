import express from 'express'
const cors = require('cors'); 
const app = express()
const port = 3001
app.use(cors());
import {jeeadvanceMale,jeeadvanceFeamale} from './playground'
app.get('/', (req, res) => {

  res.send('This is mock counseling!')
})

app.get('/college/m/:rank/:category/', async (req, res) => {
    const rank: number = Number(req.params.rank)
    const category = req.params.category
    const out = await jeeadvanceMale(category,'AI',rank)
    res.send(out)
  })
app.get('/college/f/:rank/:category/', async (req, res) => {
    const rank: number = Number(req.params.rank)
    const category = req.params.category
    const out = await jeeadvanceFeamale(category,'AI',rank)
    res.send(out)
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})