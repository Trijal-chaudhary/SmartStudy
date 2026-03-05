import React, { useState } from "react";
import "./ViewPYQ.css";
import { showSub } from "../../src/assets/Subjects";
import { useNavigate } from "react-router-dom";
const ViewPYQ = () => {
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState(0);
  const [sem, setSem] = useState("");
  const [subject, setSubject] = useState([]);
  const [subs, setSubs] = useState([]);
  const navigate = useNavigate();
  const handelBranch = (B_Name) => {
    setBranch(B_Name);
    setYear(0);
    setSem("");
    setSubject("");
    setSubs([]);
  };
  const handelyear = (Y_Name) => {
    setYear(Y_Name);
    setSem("");
    setSubject("");
    setSubs([]);
  };
  const randerSubjects = (Sem) => {
    setSem(Sem);
    setSubs(
      showSub.filter(
        (sub) => sub.year === year && sub.sem.includes(Sem.toLowerCase())
      )
    );
    // console.log(showSub);
  };
  const handelSubmit = () => {
    navigate(`/question/${branch}/${year}/${sem}/${subject.sub}`);
  };
  return (
    <div className="ViewOuterPYQMainCont">
      <div className="selectYear">
        <h2>Select Branch</h2>
        <div className="selectOuterYear">
          {["B-Tech"].map((ele) => (
            <div
              onClick={() => handelBranch(ele)}
              className={`${branch === ele ? "active" : ""} yearCard`}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
      {branch === "" ? (
        <></>
      ) : (
        <div className="selectYear">
          <h2>Select Year</h2>
          <div className="selectOuterYear">
            {[1, 2, 3, 4].map((ele) => (
              <div
                onClick={() => handelyear(ele)}
                className={`${year === ele ? "active" : ""} yearCard`}
              >
                Year {ele}
              </div>
            ))}
          </div>
        </div>
      )}
      {year === 0 ? (
        <></>
      ) : (
        <div className="selectYear">
          <h2>Select Semester</h2>
          <div className="selectOuterYear">
            {["Even", "Odd"].map((ele) => (
              <div
                onClick={() => randerSubjects(ele)}
                className={`${sem === ele ? "active" : ""} yearCard`}
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
      )}
      {sem === "" ? (
        <></>
      ) : (
        <div className="selectYear">
          <h2>Select Subject</h2>
          <div className="selectOuterYear">
            {subs?.map((ele) => (
              <div
                onClick={() => setSubject(ele)}
                className={`${
                  ele.sub === subject.sub ? "active" : ""
                } yearCard`}
              >
                {ele.sub}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        className={`SubmitButtonSeePyq ${subject === "" ? "inactive" : ""}`}
        onClick={() => handelSubmit()}
      >
        See Result
      </button>
    </div>
  );
};

export default ViewPYQ;
