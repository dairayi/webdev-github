let express = require('express');
//let User = require('../models/user');
let Driver = require('../models/driver');
let Circuit = require('../models/circuit');
let Constructor = require('../models/constructor')
let mongoose = require('mongoose');

var router = express.Router();

router.get('/constructor', (req, res, next) => {
    let searchQuery = {};

    searchQuery = { "constructorRef": { $regex: req.query.constructorRef, $options: 'i' } };

    Constructor.find(searchQuery, (err, constructors) => {
        if (err) {
            res.status(400);
            res.send();
        }

        // Could do a 204 or 404 for no results
        // but the reponse is a success
        // and the filter results are accurate

        res.status(200);
        res.send(constructors);
    })
});

router.get('/driver', (req, res, next) => {
    let searchQuery = {};

    searchQuery = { "driverRef": { $regex: req.query.driverRef, $options: 'i' } };

    Driver.find(searchQuery, (err, drivers) => {
        if (err) {
            res.status(400);
            res.send();
        }

        // Could do a 204 or 404 for no results
        // but the reponse is a success
        // and the filter results are accurate

        res.status(200);
        res.send(drivers);
    })
});

router.get('/circuit', (req, res, next) => {
    let searchQuery = {};

    searchQuery = { "circuitRef": { $regex: req.query.circuitRef, $options: 'i' } };

    Circuit.find(searchQuery, (err, circuits) => {
        if (err) {
            res.status(400);
            res.send();
        }

        // Could do a 204 or 404 for no results
        // but the reponse is a success
        // and the filter results are accurate

        res.status(200);
        res.send(circuits);
    })
});

router.post('/circuit', (req, res, next) => {
    const newCircuit = new Circuit(req.body);

    newCircuit._id = mongoose.Types.ObjectId();

    newCircuit.save((err) => {
        if (err) {
            res.status(400);
            res.send();
        } else {
            res.status(201);
            res.send({ id : newCircuit._id });
        }

    });
});

router.put('/circuit', (req, res, next) => {
    console.log(req.body);

    const id = req.body._id;

    Circuit.replaceOne({ id }, { circuitId: req.body.circuitId, circuitRef: req.body.circuitRef, name: req.body.name, location: req.body.location, country: req.body.country, lat: req.body.lat, lng: req.body.lng, url: req.body.url }, (err, circuits) => {
        if (err) {
            res.status(400);
            res.send();
        }

        res.status(200);
        res.send(req.body);
    })
});



module.exports = router;