const express = require("express");
const path = require("path");
const app = express();

app.use(
  "/static",
  express.static(path.join(__dirname, "../../frontend/static"))
);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.get("/example", (req, res, next) => {
  res.send("This is a example response.");
});

app.listen(8080, () => {
  console.log(
    "hello-world app is running on port 8080. Visit localhost:8080 in your browser"
  );
});
