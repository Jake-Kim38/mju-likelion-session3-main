import HobbyContent from "../pages/HobbyContent";
import "../reset.css";
import Data from "../Data.json";

const Hobby = () => {
  return (
    <>
      <HobbyContent data={Data} />
    </>
  );
};

export default Hobby;
