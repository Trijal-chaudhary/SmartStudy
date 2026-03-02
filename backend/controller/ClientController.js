const QuestionDetails = require('../model/QuestionModels');
exports.postGetQuestions = async (req, res, next) => {
  console.log(req.body);
  const { Subject, Year } = req.body;
  const result = await QuestionDetails.find({ subject: Subject, collYear: Year })
  res.status(202).json({ result });
}