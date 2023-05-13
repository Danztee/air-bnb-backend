const mongoose = require("mongoose");

const homeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A home must have a name"],
      unique: true,
      trim: true,
      maxlength: [40, "A home name must have less or equal than 40 characters"],
      minlength: [10, "A home name must have more or equal than 10 characters"],
    },

    location: {
      type: String,
      required: [true, "A home must have a location"],
    },

    //   images: {
    //     type: [String],
    //     required: [true, "A home must have an image"],
    //   },

    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
    },

    price: {
      type: Number,
      required: [true, "A home must have a price"],
    },

    about: {
      type: String,
      required: [true, "A home must have an about"],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Home", homeSchema);
