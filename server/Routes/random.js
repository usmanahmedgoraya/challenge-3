const express = require('express');
const router = express.Router();
const {randomNumber} = require('../controllers/random')

// Creating the first routing API Endpoint
router.get("/random", randomNumber)


module.exports = router