import Specification from "./Specification";
import UserBehaviour from "./UseBehave/UserBehaviour";
import TwoChart from "./TwoCharts/index";


const index = () => {
  return (
    <>
      <Specification />
      <UserBehaviour />
     <TwoChart/>
    </>
  );
};

export default index;
