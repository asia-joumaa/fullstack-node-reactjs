const { Router } = require('express');
const { data } = require('./data.js');
const { validateTodoInputs } = require('./validations');

const router = Router();

router.get('/', (_req, res) => {
  res.json(data.getAllTodos());
});

router.route('/').post(validateTodoInputs, (req, res) => {
  res.json(data.addNewTodo(req.body.title, req.body.description));
});

router.delete('/:id', (req, res) => {
  res.json(data.deleteTodoById(req.params.id))
});

module.exports = { router };