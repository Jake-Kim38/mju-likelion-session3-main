import Data from "../Data.json";
import Intro from "../pages/intro";

const Home = () => {
  return (
    <>
      <Intro data={Data} />
    </>
  );
};

export default Home;
