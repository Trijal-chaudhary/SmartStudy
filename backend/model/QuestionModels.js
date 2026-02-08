const mongoose = require('mongoose');
const QuestionDetails = new mongoose.Schema({
  collYear: {
    type: Number,
    default: 1
  },
  subject: {
    type: String,
    required: true
  },
  chapter: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  QuesUrl: {
    type: String,
    required: true
  },
  AnsUrl: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model("QuestionDetails", QuestionDetails);