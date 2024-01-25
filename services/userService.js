const User = require("../models/userModel");
const handlerFactory = require("./handlerFactory");

/**
 * @desc   Get All Users
 * @route  /api/v1/users
 * @method GET
 * @access private (Only Admin)
 */
exports.getUsers = handlerFactory.getAll(User);

/**
 * @desc   Get Specific User
 * @route  /api/v1/users/:id
 * @method GET
 * @access private (Only Admin)
 */
exports.getSpecificUser = handlerFactory.getOne(User);

/**
 * @desc   Create New User
 * @route  /api/v1/users
 * @method POST
 * @access private (Only Admin)
 */
exports.createUser = handlerFactory.createOne(User);

/**
 * @desc   Update Specific Users
 * @route  /api/v1/users/:id
 * @method PUT
 * @access private (Only Admin)
 */
exports.updateSpecificUsers = handlerFactory.updateOne(User);

/**
 * @desc   Delete Specific Users
 * @route  /api/v1/users/:id
 * @method DELETE
 * @access private (Only Admin)
 */
exports.deleteSpecificUsers = handlerFactory.deleteOne(User);
