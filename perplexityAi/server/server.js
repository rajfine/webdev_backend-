import connectToDB  from './src/config/database.js'
import app from './src/app.js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

dotenv.config({ path: fileURLToPath(new URL('./.env', import.meta.url)) })

const PORT = process.env.PORT || 5000
connectToDB()
  .catch((err)=>{
    console.log("MongoDB connection failed:", err)
    process.exit(1)
  })

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`)
})
