import Email from "./EmailStatics";
import Nasdaq from "./Nasdaq";

const index = () => {
  return (
    <div className="statics">
      <div className="row">
        <div className="col-md-4">
         <Email/>
        </div>

        <div className="col-md-8">
           <Nasdaq/>
        </div>
      </div>
    </div>
  );
};

export default index;
