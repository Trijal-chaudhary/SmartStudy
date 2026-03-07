const QuestionDetails = require('../model/QuestionModels');
exports.postGetQuestions = async (req, res, next) => {
  // console.log(req.body);
  const { Subject, Year, sem, QuesYear, marks, level } = req.body;
  const query = { subject: Subject, collYear: Year }
  if (sem !== "any") {
    query.semester = sem;
  }
  if (QuesYear !== "any") {
    query.year = Number(QuesYear);
  }
  if (marks !== "any") {
    query.marks = Number(marks);
  }
  if (level !== "any") {
    query.level = Number(level);
  }
  const result = await QuestionDetails.find(query);
  res.status(202).json({ result });
}