const express = require("express");
const dotenv = require("dotenv");
const figlet = require("figlet");
dotenv.config({ path: "config.env" });
require("colors");
const colors = require("colors/safe");
const morgan = require("morgan");
const { NODE_ENV, PORT } = process.env;
const connectDB = require("./config/connectDB");
const usersRoute = require("./routes/userRoute");
const ApiError = require("./utils/apiError");
const globalError = require("./middleware/errorMiddleware");

// Connect To DB
connectDB();

// Init App
const app = express();

// Middlewares
app.use(express.json());
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(
    `${figlet("Motaz Ramadan", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(colors.magenta(data));
    })}
Server is running
- MODE:`.magenta,
    `${NODE_ENV} ✓`.white
  );
} else {
  console.log(
    `Server is running
- MODE:`.magenta,
    `${NODE_ENV} ✓`.white
  );
}

// Mount Routes
app.use("/api/v1/users", usersRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route ${req.originalUrl}`, 400));
});

// Global Error Handling Middleware For Express
app.use(globalError);

// Run Server
const server = app.listen(PORT, () =>
  console.log(`${"- PORT".magenta}: ${PORT.white} ✓`)
);

// Handle "Unhandled Rejection Errors" Outside Express
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection Errors --> ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down...`);
    process.exit(1);
  });
});
