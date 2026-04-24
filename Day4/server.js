import express from "express";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world");
});


app.listen(8000, () => {
  console.log("server is running on port 8000");
});
