import Email from "./EmailStatics";
import Nasdaq from "./Nasdaq";

const index = () => {
  return (
    <div className="statics">
      <div className="row">
        <div class="col-md-4">
         <Email/>
        </div>

        <div class="col-md-8">
           <Nasdaq/>
        </div>
      </div>
    </div>
  );
};

export default index;
