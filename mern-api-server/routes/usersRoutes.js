// Users file handler
const express = require('express')
const router = express.Router();

//1 const usersControllers = require('../controllers/usersControllers')
const {getAllUsers, createNewUser, updateUser, deleteUser} = require('../controllers/usersControllers')

router.route('/')
    //1 .get(usersControllers.getAllUsers)
    .get(getAllUsers)
    .post(createNewUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;