import express from 'express'
import cors from 'cors'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/data', (req, res) => {
  const data = {
    id: 1,
    name: 'Sample Data',
    description: 'This is some sample data from the backend.'
  }
  res.status(200).json(data)
})

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' }
  ]
  res.status(200).json(users)
})



export default app