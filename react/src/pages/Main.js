import "../Main.css";

import Info from "./Info";
import HobbyList from "./HobbyList";
import SpecialList from "./SpecialList";
import Darkmode from "./Darkmode";

import Data from "../pages/Data.json";

import { useState } from "react";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className={isDark ? "darkMode" : ""}>
        <Darkmode darkMode={setIsDark} dark={isDark} />
        <Info data={Data} dark={isDark} />
        <HobbyList data={Data} dark={isDark} />
        <SpecialList data={Data} dark={isDark} />
      </div>
    </>
  );
};

export default Main;
