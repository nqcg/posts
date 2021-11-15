const express = require('express')
const router = express.Router()

//Load models
const Posts = require('../models/Posts')

router.get('/', (req, res) => {
    res.send('Day la router')
})

module.exports = router