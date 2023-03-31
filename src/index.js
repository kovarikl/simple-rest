const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/log", (req, res)=>{
    console.log(req.body)
    res.status(200).send({ok:true})

})

app.listen(port, () => {
  console.log(`Simple REST API listening on port ${port}`)
})