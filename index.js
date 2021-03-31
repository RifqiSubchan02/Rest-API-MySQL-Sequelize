const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mhsRoutes = require("./routes/mahasiswa");

// Middleware
app.use(bodyParser.json());

app.use("/v1", mhsRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(400).json({ message: message, data: data });
});

app.listen(4000, () => console.log("Server Up and Running"));
