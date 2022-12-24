const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
