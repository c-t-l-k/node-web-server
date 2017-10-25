const express = require("express");

var app = express();

// __dirname store the name to the path directory
app.use(express.static(__dirname + "/public"));

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

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
