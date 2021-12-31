const path = require('path')

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'front.html'));
    //console.log(res);
});

router.get('/front.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'front.html'));
    //console.log(res);
});

router.get('/signupForm.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'signupForm.html'));
    //console.log(res);
});

router.get('/signinForm.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'signinForm.html'));
    //console.log(res);
});

router.get('/forgotPassword.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'forgotPassword.html'));
    //console.log(res);
});

router.get('/home.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'home.html'));
    //console.log(res);
});

router.get('/about.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'about.html'));
    //console.log(res);
});

router.get('/simulation.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'simulation.html'));
    //console.log(res);
});

router.get('/materials.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'materials.html'));
    //console.log(res);
});

router.get('/basicElectronics.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'basicElectronics.html'));
    //console.log(res);
});

router.get('/resistor.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'resistor.html'));
    //console.log(res);
});

router.get('/order.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'order.html'));
    //console.log(res);
});

router.get('/orderNow_Product-1.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'orderNow_Product-1.html'));
    //console.log(res);
});

router.get('/contact.html', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../', '../', 'contact.html'));
    //console.log(res);
});

module.exports = router;