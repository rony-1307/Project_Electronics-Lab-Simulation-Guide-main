const path = require('path')

const express = require('express');

const router = express.Router();

router.post('/about.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'about.html'));
    //console.log(res);
    res.redirect('/')
});

module.exports = router;