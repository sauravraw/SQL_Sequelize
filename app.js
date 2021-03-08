const express = require("express");
const app = express();
const db = require("./models");
const dotenv = require("dotenv");

// Configure dotenv
dotenv.config({
  path: "./config.env",
});

// Setup the server port
const PORT = process.env.PORT || 3000;

// Request data content
app.use(express.urlencoded({ extended: true }));

// Request data content type application/json
app.use(express.json());

// Import data routes
const apiRouters = require("./routes/apiRoutes");

// create data routes
app.use("/", apiRouters);

// Authencticate to backend and if sucesses then listen to the port
db.sequelize.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
