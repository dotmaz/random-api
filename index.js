const express = require('express')
const app = express()

var numberOfRequests = 0;

app.get('/random', function (req, res) {
  res.json(
    {
      'randomValue': Math.floor(Math.random()*10),
      'requestCount': ++numberOfRequests
    }
    )
})

app.listen(3000)
