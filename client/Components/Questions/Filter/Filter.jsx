import React from "react";
import "./Filter.css";
import { motion } from "framer-motion";
const Filter = ({ renderFilter, setRenderFilter }) => {
  return (
    <motion.div
      initial={{
        transform: "translateX(-100%)",
      }}
      animate={renderFilter ? { transform: "translateX(0%)" } : {}}
      className="FilterMainCont"
    >
      <h2>Filter</h2>
      <svg
        className="CloseTheFiler"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        onClick={() => setRenderFilter(false)}
      >
        <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
      </svg>
      <label htmlFor="sub">Subject:-</label>
      <select name="sub" id="sub">
        <option value="Physics">Physics</option>
        <option value="maths">maths</option>
      </select>
      <label htmlFor="sem">Semester:-</label>
      <select name="sem" id="sem">
        <option value="any">any</option>
        <option value="Physics">even</option>
        <option value="maths">odd</option>
      </select>
      <label htmlFor="year">Year:-</label>
      <select name="year" id="year">
        <option value="any">any</option>
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
      <label htmlFor="year">Marks:-</label>
      <select name="marks" id="marks">
        <option value="any">any</option>
        <option value="2">2</option>
        <option value="7">7</option>
        <option value="10">10</option>
      </select>
      <label htmlFor="level">Level:-</label>
      <select name="marks" id="marks">
        <option value="any">any</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => (
          <option value={ele}>{ele}</option>
        ))}
      </select>
    </motion.div>
  );
};

export default Filter;
