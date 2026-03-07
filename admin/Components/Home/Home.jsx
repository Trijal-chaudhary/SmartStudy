import React from "react";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import { gettingQuest } from "../../src/assets/service/fetching";
const Home = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    gettingQuest("hello");
  }, []);
  return (
    <div className="outerHomeMain">
      {[0, 1, 2, 3, 4, 5].map(() => (
        <div className="questCards">
          <img
            src="https://res.cloudinary.com/dluw75knc/image/upload/v1772703308/SmartStudy/backend/kqk3iubozzyiwmucri2v.png"
            alt=""
          />
          <div className="QuesDetail">
            <h4>Subject: ENGINEERING MATHEMATICS-II</h4>
            <h4>Year: 1</h4>
            <h4>sem: odd</h4>
            <h4>Level: 7</h4>
            <h4>Marks: 6</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
