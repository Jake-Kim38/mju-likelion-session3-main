import HelloContent from "../pages/HelloContent";
import "../reset.css";
import Data from "../Data.json";

const Hello = () => {
  return (
    <>
      <HelloContent data={Data} />
    </>
  );
};

export default Hello;
