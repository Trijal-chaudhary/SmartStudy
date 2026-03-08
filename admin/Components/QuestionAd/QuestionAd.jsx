import React from "react";
import "./QuestionAd.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AddYear, QuestionInfo } from "../../src/assets/service/fetching";
import { useState } from "react";
import AskingYear from "./AskingYear/AskingYear";
const QuestionAd = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [renderAskQues, setRenderAskQues] = useState(false);
  useEffect(() => {
    console.log(id);
    QuestionInfo({ id }).then((ele) => {
      setQuestion(ele.ques);
      // console.log(ele.ques);
    });
  }, []);
  const handelAddyear = async (year) => {
    const res = await AddYear({ year, id });
    if (res.message == "added") {
      setRenderAskQues(false);
      alert("added");
    } else {
      // setRenderAskQues(false);
      alert("error");
    }
  };
  return (
    <div className="questionAdPageOuter">
      <AskingYear
        setRenderAskQues={setRenderAskQues}
        renderAskQues={renderAskQues}
        handelAddyear={handelAddyear}
      />
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
            <span className="questionAdMetaLabel flex">Year</span>
            <span>{question?.year[0]}</span>
            <svg
              className="AddYeariconSVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => setRenderAskQues(true)}
            >
              <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
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
