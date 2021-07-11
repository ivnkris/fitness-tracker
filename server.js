// add routes: view - /stats; /exercise; /
// api: /workouts - / GET all; /:id PUT single workout; / POST workout; /range GET aggregate??

const express = require("express");

const { connect } = require("./db");
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

const init = async () => {
  await connect();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

init();
