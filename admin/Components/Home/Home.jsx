import React from "react";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../Filter/Filter";
import { gettingQuest } from "../../src/assets/service/fetching";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [renderFilter, setRenderFilter] = useState(false);
  const [subName, setsubName] = useState("any");
  const [semName, setSemName] = useState("any");
  const [QuesYear, setQuesYear] = useState("any");
  const [marks, setMarks] = useState("any");
  const [Level, setLevel] = useState("any");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    gettingQuest({ subName, year: 1, semName, QuesYear, marks, Level }).then(
      (ele) => {
        setQuestions(ele.det);
        console.log(ele.det);
      }
    );
  }, [subName, semName, QuesYear, marks, Level]);
  return (
    <div className="outerHomeMain">
      <Filter
        subName={subName}
        setsubName={setsubName}
        renderFilter={renderFilter}
        setRenderFilter={setRenderFilter}
        setSemName={setSemName}
        semName={semName}
        setQuesYear={setQuesYear}
        QuesYear={QuesYear}
        setMarks={setMarks}
        marks={marks}
        setLevel={setLevel}
        Level={Level}
      />
      <svg
        className="FiterRenderButton"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        onClick={() => setRenderFilter(true)}
      >
        <path d="M96 128C83.1 128 71.4 135.8 66.4 147.8C61.4 159.8 64.2 173.5 73.4 182.6L256 365.3L256 480C256 488.5 259.4 496.6 265.4 502.6L329.4 566.6C338.6 575.8 352.3 578.5 364.3 573.5C376.3 568.5 384 556.9 384 544L384 365.3L566.6 182.7C575.8 173.5 578.5 159.8 573.5 147.8C568.5 135.8 556.9 128 544 128L96 128z" />
      </svg>
      <svg
        className="AddQuestionSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        onClick={() => navigate("/upload")}
      >
        <path d="M512 384c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4L448 80c35.3 0 64 28.7 64 64l0 240zM256 160c-13.3 0-24 10.7-24 24l0 48-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-48c0-13.3-10.7-24-24-24z" />
      </svg>

      {questions?.map((ele) => (
        <div
          onClick={() => navigate(`/question/${ele._id}`)}
          className="questCards"
        >
          <img src={ele?.QuesUrl} alt="" />
          <div className="QuesDetail">
            <h4>Subject: {ele?.subject}</h4>
            <h4>Year: {ele?.year[0]}</h4>
            <h4>sem: {ele?.semester}</h4>
            <h4>Level: {ele?.level}</h4>
            <h4>Marks: {ele?.marks}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
