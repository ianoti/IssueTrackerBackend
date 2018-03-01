const express = require('express');
const router = express.Router();
const Issue = require('../models').Issue;

/* GET issues listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    Issue.findAll({})
    .then(issues => res.json({
        error: '',
        data: issues
    }))
    .catch(error => res.json({
        error,
        data: []
    }))
  });

/* CREATE an issue listing */
router.post('/', function(req, res, next) {
    const { description, severity, assigned } = req.body;
    Issue.create({
        description,
        severity,
        assigned
    })
    .then(issue => res.status(201).json({
        error: '',
        data: 'issue',
        message: 'issue created'
    }))
    .catch(error => res.json({
        error,
        data: []
    }))
});


router.get('/:id', function(req, res) {});
router.put('/:id', function(req, res) {});
router.delete('/:id', function(req, res) {});

module.exports = router;