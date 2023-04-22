import "../Main.css";
import src from "../img/imo1.png";

import { Link } from "react-router-dom";
import { useState } from "react";

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
  return (
    <>
      <div className="controller">
        <img src={src} alt="face" />
        <div className="introduce">
          <p>{name}</p>
          <p>{department}</p>
          <p>{email}</p>
        </div>
        <div className="menu">
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
        </div>
        <div className="like">
          <h1>{number}!</h1>
          <button onClick={Increase}>Like!</button>
          <button onClick={Decrease}>DisLike...</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
