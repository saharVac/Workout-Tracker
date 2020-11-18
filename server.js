// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Define middleware
const app = express();

const PORT = 3000;

// morgan logger
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// api and html routes
app.use("/api", require("./routes/apiRoutes.js"));
app.use("/", require("./routes/htmlRoutes.js"));

// Listener
app.listen(PORT, () => {
  console.log("App running on port" +  PORT);
});