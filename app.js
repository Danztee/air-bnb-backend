const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

connectDB(process.env.MONGO_URI);
app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/home", require("./routes/homeRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
