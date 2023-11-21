const express = require('express');
const { data } = require('./data.js');
const { router } = require('./routes.js');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.use("/todos/", router);
app.use((_req, res) => { res.status(404).send({ status: 404, message: "Invalid Route" }) });

app.listen(port, async () => {
  data.load();
  console.error(`Server listening on port ${port}`);
});