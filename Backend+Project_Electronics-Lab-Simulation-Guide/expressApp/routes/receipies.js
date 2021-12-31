const path = require('path');

const express = require('express');

const router = express.Router();

const receipies = [];

router.get('/recipies',(req,res,next) => {
    res.status(200).render('receipies',{pageTitle: "Receipies", receipies: receipies});
})

router.get('/recipies',(req,res,next) => {
    receipies.push({title:req.body.title });
    res.redirect("/receipies");
})

exports.route = router;

