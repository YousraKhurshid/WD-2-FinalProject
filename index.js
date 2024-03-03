const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose'); // Corrected require statement for mongoose
const mongoURI = "mongodb+srv://Yousra0001:XpVmTMDD7VaIAlZk@cluster0.dtabvii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const port = process.env.SERVER_PORT
const cors = require('cors')
const path = require('path')

const clientpath = path.join(__dirname,'./Client/dist')
app.use('/', express.static(clientpath))


app.use(express.json())
app.use(cors())
app.use('/api', require('./user/router'))
// app.use('/api',require('./products/router'))
// // app.use('/api',require('./orders/router'))
// app.use('/api',require('./category/router'))
// app.use('/api',require('./brands/router'))
// app.use('/api',require('./user/router'))
// // app.use('/api',require('./mailer/router'))


const db = async () => {
  await mongoose.connect(mongoURI)
    .then(() => console.log("DB Conn"))
    .catch((err) => console.log("Something went wrong:", err));
}

db();


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./Client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
