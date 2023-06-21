const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// **** The `/api/tags` endpoint ****

// * Get all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// * Get one tag
router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [{ model: Product }],
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// * Create new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// * Update tag
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// * Delete tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
