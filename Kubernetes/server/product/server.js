import axios from 'axios'
import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get("/api/product", async (req,res)=>{
    const response = await axios.get("http://express-deployment")
    res.send(response.data)
})


const PORT = 8080 || process.env.PORT
app.listen(PORT, () =>{
    console.log(`Product server running on port ${PORT}`)
})