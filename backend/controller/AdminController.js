const cloudinary = require('../middleware/cloudinary');
const QuestionDetails = require('../model/QuestionModels');
const fs = require('fs');
exports.uploadQuestion = async (req, res) => {
  try {
    let ques;
    let ans;
    for (const file of req.files) {
      const uploadResult = await cloudinary.uploader.upload(file.path, {
        folder: "SmartStudy/backend",
      });
      if (file.fieldname === 'Question') {
        ques = uploadResult.secure_url;
      } else {
        ans = uploadResult.secure_url;
      }
      fs.unlinkSync(file.path);
    }
    const detatils = new QuestionDetails({
      subject: req.body.Subjects,
      chapter: req.body.Chapter,
      year: req.body.Year,
      semester: req.body.Sem,
      QuesUrl: ques,
      AnsUrl: ans,
      level: req.body.level,
      marks: req.body.marks,
      type: req.body.quesType
    })
    await detatils.save();
    console.log(ques, ans, req.body);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
}