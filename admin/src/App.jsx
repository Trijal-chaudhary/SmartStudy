import Upload from "../Components/Upload/Upload";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
