const express = require('express')

const app = express()
app.use(express.json())

const comments = [
  {
    userId: 1,
    message: 'A lannister always pays their debts'
  },
  {
    userId: 2,
    message: 'A lannister always pays their debts'
  }
]

app.get('/', (req, res) => {
  res.json({
    message: 'A lannister always pays their debts'
  });
})

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.post('/comments/new', (req, res) => {
  console.log(req.body, req.params)
  comments.push({
    userId: req.body.userId,
    message: req.body.message
  })

  res.json('id was updated: userId ' + req.body.userId)
})


app.listen(3000)