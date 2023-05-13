const Home = require("../models/homeSchema");
const cloudinary = require("../config/cloudinary");

const createHome = async (req, res) => {
  console.log(req);
  try {
    // const result = await cloudinary.uploader.upload(image, {
    //   folder: "homes",
    // });

    res.status(201).json({
      message: "Home created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createHome };
