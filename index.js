// pathaksandip321
// sYPRZTuU5gcZGwzX
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static("../srs/build"));

// Render the form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "../srs/build/index.html");
});

mongoose.connect(
  "mongodb+srv://pathaksandip321:sYPRZTuU5gcZGwzX@srs.aih7br5.mongodb.net/mydatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");

  const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  const User = mongoose.model("admins", userSchema);

  app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({ name, email, password });

    user
      .save()
      .then(() => {
        console.log("Form data stored successfully");
        res.send("Form data submitted successfully");
      })
      .catch((err) => {
        console.error("Error storing form data:", err);
        res.send("Error storing form data");
      });
  });
  app.post("/loginadmin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username })
      .then((username) => {
        if (!username) {
          res.send("User not found");
        } else {
          if (username.password === password) {
            console.log("User signed in successfully");
            res.redirect("/aboutus");
          } else {
            console.log("Invalid password");
            res.send("Invalid password");
          }
        }
      })
      .catch((err) => {
        console.error("Error retrieving user data:", err);
        res.send("Error retrieving user data");
      });
  });

  app.get("/aboutus", (req, res) => {
    res.sendFile(path.join(__dirname, "../srs/build/index.html"));
  });

  // Start the server
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
});
