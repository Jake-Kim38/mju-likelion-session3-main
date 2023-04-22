import { Link } from "react-router-dom";
import "../ResolutionContent.css";

const ResolutionContent = (props) => {
  const { introduce, reason, hobby, resolution } = props.data;
  return (
    <div class="resolutionMain">
      <div className="resolMenu">
        <Link to="/hello">{introduce}</Link>
        <Link to="/reason">{reason}</Link>
        <Link to="/hobby">{hobby}</Link>
        <Link to="/resolution">{resolution}</Link>
        <Link to="/">홈으로</Link>
      </div>
      <div class="resolutionTitle">중요한 것은, 꺾이지 않는 마음</div>
      <div class="resolutionContent">
        동아리 활동을 하다보면, 난관에 부딪힐 일이 분명 있을 것입니다.
        <br />
        프로젝트가 마음처럼 안된다거나, 내가 잘할 수 있을지에 대한 의심과 같은
        것들 말이죠.
        <br />
        하지만 저는 꺾이지 않는 마음으로, 끝까지 완주해낼 각오로 이번 동아리에
        임하겠습니다.
      </div>
    </div>
  );
};

export default ResolutionContent;
