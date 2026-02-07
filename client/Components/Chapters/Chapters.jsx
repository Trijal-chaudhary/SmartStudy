import React from "react";
import Subject from "../../src/assets/Subjects";
import { useParams } from "react-router-dom";

const Chapters = () => {
  const { sub } = useParams();
  return (
    <div className="SubjectsOuterMain">
      {Subject[sub]?.map((ele, idx) => (
        <div key={idx} className="Subs02">
          <h2>Unit: {ele.Unit}</h2>
          <h3>{ele.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Chapters;
