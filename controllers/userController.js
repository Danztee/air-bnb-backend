const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const error = require("../utils/error");

const register = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  try {
    const existing_user_email = await User.findOne({ email });
    const existing_user_phone = await User.findOne({ phoneNumber });

    if (existing_user_email || existing_user_phone)
      error("User already exists", 409);

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User registered successfully",
      user: {
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, phoneNumber, password } = req.body;
  try {
    const user = await User.findOne(email ? { email } : { phoneNumber });
    if (!user) error("User not found", 404);

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) error("Incorrect password", 401);

    res.status(200).json({
      message: "User Logged in successfully",
      user: {
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).json({ message: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { register, login };
