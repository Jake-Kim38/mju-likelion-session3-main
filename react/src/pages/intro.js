import "../Main.css";
import src from "../img/imo1.png";

import { Link } from "react-router-dom";

const Intro = (props) => {
  const { name, department, email, introduce, reason, hobby, resolution } =
    props.data;
  return (
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
    </div>
  );
};

export default Intro;
