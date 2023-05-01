import Main from "./pages/Main";
import Login from "./pages/Login";
import Hello from "./pages/hello";
import Reason from "./pages/Reason";
import Hobby from "./pages/Hobby";
import Resolution from "./pages/Resolution";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./reset.css";

export const TextContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <TextContext.Provider value={{ isDark, setIsDark }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Main />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/reason" element={<Reason />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/resolution" element={<Resolution />} />
        </Routes>
      </BrowserRouter>
    </TextContext.Provider>
  );
}

export default App;
