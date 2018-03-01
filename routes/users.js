const express = require('express');
const router = express.Router();
const User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
});
router.post('/', function(req, res) {});
router.get('/:id', function(req, res) {});
router.put('/:id', function(req, res) {});
router.delete('/:id', function(req, res) {});

module.exports = router;
