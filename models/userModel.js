const mongoose = require("mongoose");

// Create Schema
const UserSchema = new mongoose.Schema(
  {
    client_code: Number,

    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: String,

    password: {
      type: String,
      minlength: [6, "Too short password"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    address: String,

    street: String,

    city: String,
  },
  { timestamps: true }
);

// Create Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
