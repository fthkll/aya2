const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./routes/register.js')
const restaurants = require('./routes/restaurants.js')

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/denemev1", restaurants)

app.use("*", (req, res) => res.status(404).json({ error: "no access here"}))

const uri = `mongodb+srv://palmiye:sevici77@ayaform.ya1ul.mongodb.net/sample_restaurants?retryWrites=true&w=majority`;
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