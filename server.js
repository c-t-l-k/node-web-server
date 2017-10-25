const express = require("express");
const hbs = require("hbs");

var app = express();

// __dirname store the name to the path directory
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home.hbs", {
      pageTitle: "Welcome",
      pageContent: "Welcome to this webpage!",
      currentYear: new Date().getFullYear()
  });
});


app.get("/about", (req, res) => {
  res.render("about.hbs", {
      pageTitle: "About Page",
      currentYear: new Date().getFullYear()
  });
});


app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Can't access to the page"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
