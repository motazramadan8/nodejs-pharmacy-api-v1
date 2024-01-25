const mongoose = require("mongoose");
require("colors");

module.exports = () => {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log(`- DATABASE:`.magenta , `Connected to mongoDB ✓`.white);
  });
};
