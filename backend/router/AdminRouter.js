const express = require('express');
const multer = require('multer')
const { uploadQuestion } = require('../controller/AdminController');
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

uploadQuestionRouter.post('/', upload.any(), uploadQuestion);

exports.uploadQuestionRouter = uploadQuestionRouter;