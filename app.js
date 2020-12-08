const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    name: "Baxter",
    style: "style",
  });
});

app.get("/work", (req, res) => {
  res.render("work", {
    title: "Home",
    name: "Baxter",
    style: "style",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
