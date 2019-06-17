const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');


const Size = require('./size');
const Score = require('./score');

app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
    next()
  })

mongoose.connect('mongodb+srv://namidad:Namidad12@triage-su1vl.gcp.mongodb.net/triage?retryWrites=true').then(()=>{});

app.listen(4000, ()=>console.log('server started on port 4000.'));

app.post('/submit-size', (req,res,next)=>{
    const number = new Size({
        _id: new mongoose.Types.ObjectId(),
        sizeId: 0,
        numberOfComputers:0,
        amountOfGeneration:0,
        sizeOfPopulation: 0
    });
    number.save().then(result=>{
        res.json(true);
    }).catch(err=>console.log(err));
});

app.post('/set-size', (req,res,next)=>{
    Size.findById(req.body.id).then((
        size => {
            size.sizeOfPopulation = req.body.size;
            size.numberOfComputers = req.body.numberOfComputers;
            size.amountOfGeneration = req.body.amountOfGeneration;
            size.save();
            res.json(true);
        }
    )); 
});


app.get('/getScore', (req,res,next)=>{
    Score.find().exec().then(size=>{
        res.json(size);
    }).catch(err=>console.log(err));
})

app.post('/setScore', (req,res,next)=>{
    Score.findById("5d01532c0316b80f812dd9c1").then((
        size => {
            size.score = [];
            size.save();
            res.json(true);
        }
    )); 
});


app.post('/create-result', (req,res,next)=>{
    const result = new Score({
        _id: new mongoose.Types.ObjectId(),
        scoreId: 0,
        score: []
    });
    result.save().then(result=>{
        res.json(true);
    }).catch(err=>console.log(err));
});
