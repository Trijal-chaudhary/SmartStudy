import React from "react";
import "./Upload.css";
import { handelUploadQues } from "../../src/assets/service/fetching";
const Upload = () => {
  const handelFile = async (e) => {
    e.preventDefault();
    const file = e.target;
    const formData = new FormData(file);
    await handelUploadQues(formData);
  };
  return (
    <div className="UploadOuterMainCont">
      <form className="UploadOuterform" action="" onSubmit={handelFile}>
        <label htmlFor="Subjects">Subjects:</label>
        <select name="Subjects" id="subjects">
          <option value="Physics">Physics</option>
          <option value="Mathematics-I">Mathematics-I</option>
        </select>
        <label htmlFor="Chapter">Chapter:</label>
        <select name="Chapter" id="chapter">
          <option value="1">Unit-1</option>
          <option value="2">Unit-2</option>
          <option value="3">Unit-3</option>
          <option value="4">Unit-4</option>
          <option value="5">Unit-5</option>
        </select>
        <label htmlFor="Year">Year:</label>
        <select name="Year" id="Year">
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
        <label htmlFor="Sem">Semester:</label>
        <select name="Sem" id="sem">
          <option value="Odd">Odd</option>
          <option value="Even">Even</option>
        </select>
        <label htmlFor="Question">Upload Question:</label>
        <input type="file" id="Question" name="Question" />
        <label htmlFor="Ans">Upload Answer:</label>
        <input type="file" id="Ans" name="Ans" />
        <label htmlFor="level">Level of Question:</label>
        <input
          type="number"
          name="level"
          id="level"
          placeholder="Enter the level between 1 to 10"
        />
        <label htmlFor="marks">Marks of the question:</label>
        <input
          type="number"
          name="marks"
          id="marks"
          placeholder="Enter the marks"
        />
        <label htmlFor="quesType">Select Type of the question:</label>
        <select name="quesType" id="quesType">
          <option value="numerical">numerical</option>
          <option value="theory">theory</option>
        </select>
        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
};

export default Upload;
