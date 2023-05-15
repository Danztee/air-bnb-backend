const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please provide your first name"],
    },
    lastName: {
      type: String,
      required: [true, "please provide your last name"],
    },
    phoneNumber: { type: Number, unique: true },
    email: { type: String, unique: true,  },
    emailVerified: { type: Boolean,default: false },
    image: String,
    password: String,

    // favoritesIds: [String],
    // accounts: [Accounts],
    // listings: [Listings],
    // reservations: [Reservations],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
