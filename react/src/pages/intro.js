import "../Main.css";
import src from "../img/imo1.png";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import DarkMode from "./DarkMode";
import { TextContext } from "../App";

const Intro = (props) => {
  const { name, department, email, introduce, reason, hobby, resolution } =
    props.data;
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 1);
  };
  const content = useContext(TextContext);
  const { isDark, setIsDark } = content;
  return (
    <>
      <div className={isDark ? "controllerDarkMode" : "controller"}>
        <DarkMode darkMode={setIsDark} dark={isDark} />
        <img src={src} alt="face" />
        <div className={isDark ? "introduceDarkMode" : "introduce"}>
          <p>{name}</p>
          <p>{department}</p>
          <p>{email}</p>
        </div>
        <div className={isDark ? "menuDarkMode" : "menu"}>
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
        </div>
        <div className={isDark ? "likeDarkMode" : "like"}>
          <h1>{number}!</h1>
          <button onClick={Increase}>Like!</button>
          <button onClick={Decrease}>DisLike...</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
