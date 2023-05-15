const Home = require("../models/homeSchema");
const cloudinary = require("../config/cloudinary");

const createHome = async (req, res) => {
  console.log(req.body);
  const { image, name } = req.body;

  try {
    if (!image) return;

    const uploadedResponse = await cloudinary.uploader.upload(image, {
      public_id: name,
      folder: "air-bnb-homes",
    });

    console.log(uploadedResponse);

    res.status(201).json({
      message: "Home created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createHome };
