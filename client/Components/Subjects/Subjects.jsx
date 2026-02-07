import React from "react";
import "./Subjects.css";
import Subject from "../../src/assets/Subjects";
import { useNavigate } from "react-router-dom";
const Subjects = () => {
  const navigate = useNavigate();
  const handelSub = (ele) => {
    navigate(`/Chapter/${ele}`);
  };
  return (
    <div className="SubjectsOuterMain">
      {Object.keys(Subject).map((key, idx) => (
        <div
          key={idx}
          className="Subs02"
          onClick={() => {
            handelSub(key);
          }}
        >
          <h2>{key}</h2>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
