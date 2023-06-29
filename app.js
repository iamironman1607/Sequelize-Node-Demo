const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const sequelize = require('./config/db');

const userRoute = require('./routes/user');
app.use(express.json());
app.use('/', userRoute);

sequelize.sync() //sync models to DB
    .then(result => {
        // console.log(result);
        app.listen(PORT, console.log('Server up at ', PORT))
    })
    .catch(err => {
        console.log("DB error", err.message);
        process.exit(1);
    })