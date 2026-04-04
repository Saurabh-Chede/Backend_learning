const http = require("http");

const myserver = http.createServer((req, res) => {
  console.log(req.url, "req.url");
  if (req.url == "/") {
    res.write("Welcome to the Home Page!");
  } else if (req.url == "/login") {
    res.write("Welcome to the Login Page!");
  } else {
    res.write("Page Not Found!");
  }
  res.end();
});

myserver.listen(8000, () => {
  console.log("server is listening on port:8000");
});
