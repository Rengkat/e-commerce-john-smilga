const validator = require("validator");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      message: "Please enter valid email",
      validator: validator.isEmail,
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);
