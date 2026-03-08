const express = require('express');
const multer = require('multer')
const { uploadQuestion, gettingQuestion, postQuestion, postAddYear } = require('../controller/AdminController');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {

    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

const uploadQuestionRouter = express.Router();
const gettingQuestionRouter = express.Router();
const postQuestionRouter = express.Router();
const postAddYearRouter = express.Router();

uploadQuestionRouter.post('/', upload.any(), uploadQuestion);
gettingQuestionRouter.post('/', gettingQuestion);
postQuestionRouter.post('/', postQuestion)
postAddYearRouter.post('/', postAddYear);

exports.uploadQuestionRouter = uploadQuestionRouter;
exports.gettingQuestionRouter = gettingQuestionRouter;
exports.postQuestionRouter = postQuestionRouter;
exports.postAddYearRouter = postAddYearRouter;