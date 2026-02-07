import Chapters from "../Components/Chapters/Chapters";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
