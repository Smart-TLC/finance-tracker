const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

const router = require("./routes/api");

// Database config
const db = require("./config/key").mongoURI;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
// Body parser middleware
// Note that with express version 16-, use bodyparser package instead
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(router);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

// Start server
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}!`);
});
