const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email must be unique"],
      unique: [true, "Email must be unique"],
      trim: true,
      lowercase: true,
    },

    phone: String,

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Too short password"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    address: String,
  },
  { timestamps: true }
);

// Create Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
