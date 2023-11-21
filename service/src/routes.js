const { Router } = require('express');
const { data } = require('./data.js');

const router = Router();

router.get('/', (_req, res) => {
  res.json(data.getAllTodos());
});

router.delete('/:id', (req, res) => {
  res.json(data.deleteTodoById(req.params.id))
});

module.exports = { router };