import { Link } from "react-router-dom";
import "../ResolutionContent.css";

const ResolutionContent = (props) => {
  const {
    introduce,
    reason,
    hobby,
    resolution,
    return_home,
    resolution_title,
    resolution_content,
  } = props.data;
  return (
    <div className="resolutionBody">
      <div class="resolutionMain">
        <div className="resolMenu">
          <Link to="/hello">{introduce}</Link>
          <Link to="/reason">{reason}</Link>
          <Link to="/hobby">{hobby}</Link>
          <Link to="/resolution">{resolution}</Link>
          <Link to="/home">{return_home}</Link>
        </div>
        <div class="resolutionTitle">{resolution_title}</div>
        <div class="resolutionContent">{resolution_content}</div>
      </div>
    </div>
  );
};

export default ResolutionContent;
