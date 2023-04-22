import ReasonContent from "../pages/ReasonContent";
import "../reset.css";
import Data from "../Data.json";

const Reason = () => {
  return (
    <>
      <ReasonContent data={Data} />
    </>
  );
};

export default Reason;
