import Subjects from "../Components/Subjects/Subjects";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
