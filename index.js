const path = require();
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Index");
// });

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
