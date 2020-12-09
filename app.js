const express = require("express");
const path = require("path");
const app = express();
const port = Process.env.PORT || 3000;

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

server.listen(port, () => {
  // do not add localhost here if you are deploying it
  app.listen(process.env.PORT || port, () =>
    console.log(`example app listening at http://;pcalhost:${port}`)
  );
});
