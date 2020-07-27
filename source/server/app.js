require('dotenv').config()
const express = require('express')
const cors = require('cors')
const errHandler = require(`./middlewares/errHandler`)
const routes = require(`./routes`)
const app = express()
const port = process.env.PORT || 3000
 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)
app.use(errHandler)

 
app.listen(port, () => {
    console.log(`meow meow at ${port}`)
})