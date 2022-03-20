const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://palmiye:sevici77@ayaform.ya1ul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true })
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection is established succesfully aq");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});