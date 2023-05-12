const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
