import "../HelloContent.css";
import src from "../img/imo2.jpg";
import { Link } from "react-router-dom";

const HelloContent = (props) => {
  const {
    title_text,
    main_text,
    introduce,
    reason,
    hobby,
    resolution,
    return_home,
  } = props.data;
  return (
    <div>
      <div className="main__introduce">
        <img src={src} alt="face" />
        <div className="article">
          <div className="title__text">{title_text}</div>
          <div className="main__text">{main_text}</div>
        </div>
        <div className="introduce__menu">
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
          <Link to="/home">{return_home}</Link>
        </div>
      </div>
    </div>
  );
};

export default HelloContent;
