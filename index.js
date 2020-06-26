const express = require('express')
const app = express()
const port = 4000

app.get('/data', (req, res) => res.json([
    {id: 1, msg:'A message from back-end'},
    {id: 2, msg:'Another message from back-end'}
]))
app.listen(port, () => console.log(`running in localhost:${port}`))