import React from "react";
import "./QuestionAd.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { QuestionInfo } from "../../src/assets/service/fetching";
import { useState } from "react";
const QuestionAd = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  useEffect(() => {
    console.log(id);
    QuestionInfo({ id }).then((ele) => {
      setQuestion(ele.ques);
      // console.log(ele.ques);
    });
  }, []);

  return (
    <div className="questionAdPageOuter">
      <div className="questionAdCard">
        <div className="questionAdTopInfo">
          <div className="questionAdSubject">{question?.subject}</div>
          <div className="questionAdCode">{question?.SubCode}</div>
        </div>

        <div className="questionAdMetaContainer">
          <div className="questionAdMetaBox">
            <span className="questionAdMetaLabel">Semester</span>
            <span>{question?.semester}</span>
          </div>

          <div className="questionAdMetaBox">
            <span className="questionAdMetaLabel">Year</span>
            <span>{question?.year[0]}</span>
          </div>

          <div className="questionAdMetaBox">
            <span className="questionAdMetaLabel">Marks</span>
            <span>{question?.marks}</span>
          </div>

          <div className="questionAdMetaBox">
            <span className="questionAdMetaLabel">Level</span>
            <span>{question?.level}</span>
          </div>

          <div className="questionAdMetaBox">
            <span className="questionAdMetaLabel">Type</span>
            <span>{question?.type}</span>
          </div>

          <div className="questionAdMetaBox">
            <span className="questionAdMetaLabel">Chapter</span>
            <span>{question?.chapter}</span>
          </div>
        </div>

        <div className="questionAdImagesContainer">
          <div className="questionAdImageBlock">
            <h3 className="questionAdImageTitle">Question</h3>
            <img src={question?.QuesUrl} className="questionAdImage" />
          </div>

          <div className="questionAdImageBlock">
            <h3 className="questionAdImageTitle">Answer</h3>
            <img src={question?.AnsUrl} className="questionAdImage" />
          </div>
        </div>

        <div className="questionAdReactionBar">
          <div className="questionAdLike">👍 {question?.likes}</div>
          <div className="questionAdDislike">👎 {question?.dislikes}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAd;
