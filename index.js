const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Yousra0001:XpVmTMDD7VaIAlZk@cluster0.dtabvii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const cors = require('cors');
const path = require('path');

const port = process.env.SERVER_PORT || 3000; // Set a default port if SERVER_PORT is not defined

app.use(cors()); // Allow requests from any origin

app.use(express.json());

const clientpath = path.join(__dirname,'./Client/dist');
app.use('/', express.static(clientpath));

app.use('/api', require('./user/router'));

const db = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB Conn");
    } catch (err) {
        console.log("Something went wrong:", err);
    }
}

db();

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./Client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
