import React, { useRef } from "react";
import "./AskingYear.css";
const AskingYear = ({ setRenderAskQues, renderAskQues, handelAddyear }) => {
  const yearRef = useRef();
  return (
    <>
      {renderAskQues ? (
        <div className="yearAskOverlay">
          <div className="yearAskModal">
            <h2 className="yearAskTitle">Select Year</h2>
            <svg
              className="CloseTheYearSVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              onClick={() => setRenderAskQues(false)}
            >
              <path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z" />
            </svg>
            <select ref={yearRef} className="yearAskSelect">
              <option value="">Choose year</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>

            <button
              className="yearAskButton"
              onClick={() => handelAddyear(yearRef.current.value)}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AskingYear;
