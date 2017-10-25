const express = require("express");
var app = express();

// This will let us set up an handler for an HTTP get request.
app.get("/", (req, res) => {
  // Here, there gonna get this back as the body data
  // res.send("<h1>Hello Express!</h1>");

  // Now the content-type of the reponse header has changed to json
  res.send({
    name: "Cyrus",
    likes: ["Mélo", "Louisie"]
  })
});


// Create a new route for about
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});


app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Can't access to the page"
  });
});

// This is gonna bind the app on a port of our machine
app.listen(3000);
