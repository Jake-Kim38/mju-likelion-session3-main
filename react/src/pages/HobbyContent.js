import { Link } from "react-router-dom";
import "../HobbyContent.css";
import src1 from "../img/html.png";
import src2 from "../img/friend.jpg";
import src3 from "../img/shy.jpg";

const HobbyContent = (props) => {
  const {
    introduce,
    reason,
    hobby,
    resolution,
    return_home,
    first_hobby_text,
    second_hobby_text,
    third_hobby_text,
  } = props.data;
  return (
    <div className="hobbyBody">
      <div className="main__area">
        <div className="HobbyMenu">
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
          <Link to="/home">{return_home}</Link>
        </div>
        <div className="first__specific__area">
          <div>
            <img src={src1} alt="html/css" />
          </div>
          <div className="text">{first_hobby_text}</div>
        </div>
        <div className="second__specific__area">
          <div>
            <img src={src2} alt="together" />
          </div>
          <div className="text">{second_hobby_text}</div>
        </div>
        <div className="third__specific__area">
          <div>
            <img src={src3} alt="shy" />
          </div>
          <div className="text">{third_hobby_text}</div>
        </div>
      </div>
    </div>
  );
};

export default HobbyContent;
