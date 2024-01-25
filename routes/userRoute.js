const express = require("express");

const router = express.Router();

const {
  getSpecificUser,
  getUsers,
  createUser,
  updateSpecificUsers,
  deleteSpecificUsers,
} = require("../services/userService");

router.route("/").get(getUsers).post(
  // createBrandValidator,
  createUser
);

router
  .route("/:id")
  .get(
    // getBrandValidator,
    getSpecificUser
  )
  .put(
    // updateSpecificBrandValidator,
    updateSpecificUsers
  )
  .delete(
    // deleteSpecificBrandValidator,
    deleteSpecificUsers
  );

module.exports = router;
