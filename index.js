const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 5005

app.use(bodyParser())
app.use(cors())

const { productRouter } = require('./router')

app.use('/products', productRouter)

app.listen(PORT, () => console.log(PORT))