const mongoose = require('mongoose');
const QuestionDetails = new mongoose.Schema({
  collYear: {
    type: Number,
    default: 1
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
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
    type: [Number],
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