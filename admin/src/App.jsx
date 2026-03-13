import Home from "../Components/Home/Home";
import EditQuestion from "../Components/QuestionAd/EditQuestion/EditQuestion";
import QuestionAd from "../Components/QuestionAd/QuestionAd";
import Upload from "../Components/Upload/Upload";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/question/:id" element={<QuestionAd />} />
          <Route path="/editques/:id" element={<EditQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
