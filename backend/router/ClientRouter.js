const express = require('express');
const { postGetQuestions } = require('../controller/ClientController');

const PostGetQuestionsRouter = express.Router();

PostGetQuestionsRouter.post('/', postGetQuestions);

exports.PostGetQuestionsRouter = PostGetQuestionsRouter