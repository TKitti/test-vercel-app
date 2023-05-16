const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("teszt");
})


app.listen(port, ()=> {
  console.log("listening to the server on http://localhost:3000")
});
