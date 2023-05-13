const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    mongoose.set("strictQuery", true);
    const res = await mongoose.connect(uri);
    console.log("mongodb connected successfully:" + res.connection.host);
  } catch (error) {
    console.log(`mongodb Error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
