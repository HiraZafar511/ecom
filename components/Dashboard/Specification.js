import { useState } from "react";
import { useSelector } from "react-redux";

const Specific = () => {
  const [data] = useState([
    {
      icon: "fa-globe",
      title: "Capacity",
      worth: "150GB",
      icon1:"fas fa-sync-alt",
      task: "Update Now",
      color:"text-warning"
    },
    {
      icon: "fa-coins",
      title: "Revenue",
      worth: "$ 1,345",
      icon1:"far fa-calendar-alt",
      task: " Last day",
      color:"text-success"

    },
    {
      icon: "fa-bezier-curve",
      title: "Errors",
      worth: "23",
      icon1:"far fa-clock",
      task: " In the last hour",
      color:"text-danger"
    },
    {
      icon: "fa-heart",
      title: "Followers",
      worth: "+45K",
      icon1:"fas fa-sync-alt",
      task: "Update now",
      color:"text-primary"
    },
  ]);

  return (
    <div className="content">
      <div className="row">

      {data.map((item,key)=>(
             <div className="col-sm-6 col-md-6 col-lg-3">
             <div className="card-stats card">
              
               <div className="card-body">
                 <div className="row">
                   <div className="col-5 col-md-4">
                     <div className="icon-big text-center icon-warning">
                       <i className={`fas ${item.icon} ${item.color}`}></i>
                     </div>
                   </div>
                   <div className="col-7 col-md-8">
                     <div className="numbers">
                       <p className="card-category">{item.title}</p>
                       <p className="card-title">{item.worth}</p>
                       <p></p>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="card-footer">
                 <hr />
                 <div className="stats">
                   <i className={` ${item.icon1}`}></i> {item.task}
                 </div>
               </div>
             </div>
           </div>  
              ))}

       
      </div>
    </div>
  );
};

export default Specific;
