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
      error: {
        errorName: error.name,
        errorCode: error.code
    },
        data: []
    }))
  });

/* GET an issue listing. */
router.get('/:id', function(req, res, next) {
    // res.send('respond with a resource');
    const issueId = req.params.id
    Issue.findOne({
        where: {
            id: issueId
        }
    })
    .then(issues => res.json({
        error: '',
        data: issues
    }))
    .catch(error => res.json({
        error: {
            errorName: error.name,
            errorCode: error.code
        },
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
        error: {
            errorName: error.name,
            errorCode: error.code
        },
        data: []
    }))
});

/* UPDATING an Issue listing */
router.put('/:id', function(req, res, next) {
    const issueId = req.params.id;
    const { description, severity, assigned } = req.body;
    Issue.update({
        description,
        severity,
        assigned
    }, {
        where: {
        id: issueId
        }
    })
    .then(issue => res.status(201).json({
        error: '',
        data: 'issue',
        message: 'issue updated'
    }))
    .catch(error => res.json({
        error: {
            errorName: error.name,
            errorCode: error.code
        },
        data: []
    }))
});

/* Deleting an issue */
router.delete('/:id', function(req, res, next) {
    const issueId = req.params.id;
    Issue.destroy({
      where: {
        id: issueId
      }
    })
    .then(issue => res.status(201).json({
      error: '',
      data: 'issue',
      message: 'issue deleted'
    }))
    .catch(error => res.json({
      error: {
        errorName: error.name,
        errorCode: error.code
    },
      data: []
    }))
});

module.exports = router;