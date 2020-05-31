const router = require('express').Router();
const Projects = require('./projects-model.js');
const restrict = require('../auth/restrict.js');
 
//const db = require('../data/values.js');


router.get('/', restrict, (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'GET Error for /.'});
    });
});


router.get('/:id', restrict, async (req, res, next) => {
  try {
    const { id } = req.params
    const project = await Projects.findById(id)
    return res.json(project)
  } catch (err) {
    next(err)
  }
});

router.post('/', restrict, (req, res) => {
  Projects.insert(req.body)
      .then(newProject => {
          res.status(201).json(newProject);
      })
      .catch(err => {
          res.status(500).json({ errorMessage: "Error creating new project." });
      })
});

router.put('/:id', restrict, (req, res) => {
  Projects.update(req.params.id, req.body)
      .then(updatedProject => {
          res.status(200).json(updatedProject);
      })
      .catch(err => res.status(500).json({ errorMessage: "Error with update." }));
});

router.delete('/:id', restrict, (req, res) => {
  Projects.remove(req.params.id)
      .then(removedProject => res.status(200).json(removedProject))
      .catch(err => res.status(500).json({ errorMessage: "Error deleting the project." }));
});

module.exports = router;