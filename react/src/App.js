import Main from "./pages/Main";
import Hello from "./pages/hello";
import Reason from "./pages/Reason";
import Hobby from "./pages/Hobby";
import Resolution from "./pages/Resolution";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/reason" element={<Reason />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/resolution" element={<Resolution />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
