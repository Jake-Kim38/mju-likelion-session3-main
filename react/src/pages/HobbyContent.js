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
    first_hobby_text,
    second_hobby_text,
    third_hobby_text,
  } = props.data;
  return (
    <>
      <div class="main__area">
        <div className="HobbyMenu">
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
          <Link to="/">홈으로</Link>
        </div>
        <div class="first__specific__area">
          <div>
            <img src={src1} alt="face" />
          </div>
          <div class="text">{first_hobby_text}</div>
        </div>
        <div class="second__specific__area">
          <div>
            <img src={src2} alt="face" />
          </div>
          <div class="text">{second_hobby_text}</div>
        </div>
        <div class="third__specific__area">
          <div>
            <img src={src3} alt="face" />
          </div>
          <div class="text">{third_hobby_text}</div>
        </div>
      </div>
    </>
  );
};

export default HobbyContent;
