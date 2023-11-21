function validateTodoInputs (req, res, next) {
  let body = req.body;

  if(!body.title && !body.description) {
    return res.status(400).json({error: "Title and description inputs are required"});
  }

  if(!body.title) {
    return res.status(400).json({error: "Title input is required"});
  }

  if(!body.description) {
    return res.status(400).json({error: "Description input is required"});
  }

  next();
}

module.exports = { validateTodoInputs };