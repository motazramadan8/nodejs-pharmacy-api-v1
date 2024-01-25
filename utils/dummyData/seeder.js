const fs = require("fs");
require("colors");
const dotenv = require("dotenv");
const User = require("../../models/userModel");
const connectDB = require("../../config/connectDB");

dotenv.config({ path: "../../config.env" });

// connect to DB
connectDB();

// Read data
const users = JSON.parse(fs.readFileSync("./clients.json"));

// Insert data into DB
const insertData = async () => {
  try {
    await User.create(users);

    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === "-i") {
  insertData();
} else if (process.argv[2] === "-d") {
  destroyData();
}
