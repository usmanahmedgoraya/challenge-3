// import the useful things
require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express')
const connectToDB = require('./conectToDB')
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors())

// Declare the port
const port = 3000


// Test API Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Using API Endpoint using Routing
app.use("/api",require('./Routes/random'))


// Listening the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectToDB(process.env.MONGO_URI)
})