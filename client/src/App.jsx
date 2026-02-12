import Chapters from "../Components/Chapters/Chapters";
import Questions from "../Components/Questions/Question";
import Subjects from "../Components/Subjects/Subjects";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subjects />} />
          <Route path="/Chapter/:sub" element={<Chapters />} />
          <Route path="/Question" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
