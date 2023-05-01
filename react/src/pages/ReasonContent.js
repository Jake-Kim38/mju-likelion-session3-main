import { Link } from "react-router-dom";
import "../ReasonContent.css";
import src1 from "../img/team.jpeg";
import src2 from "../img/code.jpeg";

const ReasonContent = (props) => {
  const {
    first_reason_main,
    first_reason_text,
    second_reason_main,
    second_reason_text,
    introduce,
    reason,
    hobby,
    resolution,
    return_home,
  } = props.data;
  return (
    <div className="reasonBody">
      <div class="myintro">
        <div className="reasonMenu">
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
          <Link to="/home">{return_home}</Link>
        </div>
        <div class="first">
          <img src={src1} alt="face" />
          <div class="myarticle">
            <div class="myTitleText">{first_reason_main}</div>
            <div class="myMainText">{first_reason_text}</div>
          </div>
        </div>
        <div class="second">
          <img src={src2} alt="face" />
          <div class="myarticle">
            <div class="myTitleText">{second_reason_main}</div>
            <div class="myMainText">{second_reason_text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonContent;
