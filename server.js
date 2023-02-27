
const express = require('express')
const connectDb = require("./config/dbConnection")
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config()
const cors = require('cors')



const app = express()

const port = process.env.PORT || 5000

connectDb()

app.use(cors())
app.use(express.json())
app.use('',require("./routes/coinsRoutes"))
//app.use('/api/coins/coins_address',require("./routes/coins_addressRoutes"))
app.use(errorHandler)


app.listen(port,()=>{
console.log(`server is running ${port}`)
})





  