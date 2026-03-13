import React from "react";
import "./QuestionAd.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AddYear, QuestionInfo } from "../../src/assets/service/fetching";
import { useState } from "react";
import AskingYear from "./AskingYear/AskingYear";
const QuestionAd = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [renderAskQues, setRenderAskQues] = useState(false);
  const navigate = useNavigate();
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
        <svg
          className="editIconSVG"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={() => navigate(`/editques/${id}`)}
        >
          <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" />
        </svg>
      </div>
    </div>
  );
};

export default QuestionAd;
