import Chapters from "../Components/Chapters/Chapters";
import Questions from "../Components/Questions/Question";
import Subjects from "../Components/Subjects/Subjects";
import ViewPYQ from "../Components/ViewPYQ/ViewPYQ";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subjects />} />
          <Route path="/Chapter/:sub" element={<Chapters />} />
          <Route
            path="/question/:branch/:year/:sem/:subject"
            element={<Questions />}
          />
          <Route path="/viewpyq" element={<ViewPYQ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
