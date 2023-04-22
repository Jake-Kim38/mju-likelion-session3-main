import ResolutionContent from "../pages/ResolutionContent";
import "../reset.css";
import Data from "../Data.json";

const Resolution = () => {
  return (
    <>
      <ResolutionContent data={Data} />
    </>
  );
};

export default Resolution;
