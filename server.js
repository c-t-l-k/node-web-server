const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
})

hbs.registerHelper("screamIt", (text) => {
  return text.toUpperCase();
})

app.use((req, res, next) => {

  var now = new Date().toString();
  var log = `${now}: ${req.method}  + ${req.url}`;

  console.log(log);

  fs.appendFile("server.log", log + "\n", (err) => {
    if(err){
      console.log("Unable to append to server file");
    }
  })
  next();
})

// Here, we are creating a middleware in case we wanna update the site.
// app.use((req, res, next) => {
//   res.render("maintenance.hbs")
// })


// This needs to be moved after the maintenance otherwise it will still load.
app.use(express.static(__dirname + "/public"));



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
