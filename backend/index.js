require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {dbConnect} = require('./db/dbConnect')
const apiRoutes = require('./routes/api');



const app = express();
const PORT = process.env.PORT || 8000;

// middlewaer
app.use(cors());
app.use(express.json());

app.use('/', apiRoutes);



const server = () => {
    dbConnect()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
    
}

server()