// Root route handler
const express = require('express')
const router = express.Router();
const path = require('path')

// get request to render the index paga. we use an regexp to mucht only the / simbol or an index with html extention
router.get('^/$|/index(.thml)?', (req, res) => {

    // indicate espress where to find the htm file
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
    
    })

module.exports = router;