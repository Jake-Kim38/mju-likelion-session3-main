import Data from "../Data.json";
import Intro from "../pages/intro";

const home = () => {
  return (
    <>
      <Intro data={Data} />
    </>
  );
};

export default home;
