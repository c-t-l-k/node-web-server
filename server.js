const express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send({
    name: "Cyrus",
    likes: ["Mélo", "Louisie"]
  })
});


app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});


app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Can't access to the page"
  });
});

app.listen(3000);
