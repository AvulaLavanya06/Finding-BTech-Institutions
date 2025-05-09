const router = require('express').Router();
let Institution = require('../models/institution.model');

// Get all institutions
router.route('/').get((req, res) => {
  Institution.find()
    .then((institutions) => res.json(institutions))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get institutions by city
router.route('/city/:city').get((req, res) => {
  Institution.find({ city: req.params.city })
    .then((institutions) => res.json(institutions))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get a single institution by ID
router.route('/:id').get((req, res) => {
  Institution.findById(req.params.id)
    .then((institution) => res.json(institution))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new institution
router.route('/add').post((req, res) => {
  const { name, city, courses, ranking, image,  description } = req.body;

  const newInstitution = new Institution({
    name,
    city,
    courses,
    ranking,
    image,
    description,
  });

  newInstitution
    .save()
    .then(() => res.json('Institution added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update an institution
router.route('/update/:id').put((req, res) => {
  Institution.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json('Institution updated!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete an institution
router.route('/:id').delete((req, res) => {
  Institution.findByIdAndDelete(req.params.id)
    .then(() => res.json('Institution deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
