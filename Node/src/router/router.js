const express = require('express');
const router = express.Router();
const StudentController = require('../controller/controller');
const questioncontroller = require('../controller/questioncontroller');


router.route('/signup').post(StudentController.add)
router.route('/login').post(StudentController.checkUser)
router.route('/question').post(questioncontroller.add)
router.route('/answer').post(questioncontroller.update)
router.route('/data').get(questioncontroller.find)




module.exports = router;