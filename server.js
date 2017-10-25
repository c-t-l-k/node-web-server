const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
})

hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase();
})

app.use(express.static(__dirname + "/public"));

// Creating the middleware here
// Use next() for the app. continue to run
// If we don't call next(), the app. handlers never gonna fire
app.use((req, res, next) => {

  var now = new Date().toString();
  console.log(`${now}: ${req.method}  + ${req.url}`);
  next();
})

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home.hbs", {
      pageTitle: "Welcome to my website",
      pageContent: "Welcome to this webpage!",
  });
});


app.get("/about", (req, res) => {
  res.render("about.hbs", {
      pageTitle: "About Page",
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
