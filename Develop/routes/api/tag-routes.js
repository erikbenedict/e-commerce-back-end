const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// * The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [{ model: Product }],
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
