const path = require('path');

const express = require('express');

const router = express.Router();

router.post('/home', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'home.html'));
    
});

module.exports = router;