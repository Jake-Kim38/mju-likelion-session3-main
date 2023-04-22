import ReasonContent from "../pages/ReasonContent";
import "../reset.css";
import Data from "../Data.json";

const Reason = () => {
  return (
    <div className="reasonBody">
      <ReasonContent data={Data} />
    </div>
  );
};

export default Reason;
