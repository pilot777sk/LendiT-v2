const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;



// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view
// Serve up static assets
app.use(express.static("client/build"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lendit");
app.listen(PORT, function() {
  console.log("Starting");
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

