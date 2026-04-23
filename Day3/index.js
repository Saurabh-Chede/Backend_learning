import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/saurabh", (req, res) => {
  res.send("SAURABH");
});

app.post("/post", (req, res) => {
  res.send({'name':'saurahb'});
});

app.get("/login", (req, res) => {
  res.send("this is login page");
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
