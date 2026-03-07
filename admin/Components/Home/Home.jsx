import React from "react";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../Filter/Filter";
import { gettingQuest } from "../../src/assets/service/fetching";
const Home = () => {
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
      >
        <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z" />
      </svg>
      {questions?.map((ele) => (
        <div className="questCards">
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
