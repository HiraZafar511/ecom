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
             <div class="col-sm-6 col-md-6 col-lg-3">
             <div class="card-stats card">
              
               <div class="card-body">
                 <div class="row">
                   <div class="col-5 col-md-4">
                     <div class="icon-big text-center icon-warning">
                       <i class={`fas ${item.icon} ${item.color}`}></i>
                     </div>
                   </div>
                   <div class="col-7 col-md-8">
                     <div class="numbers">
                       <p class="card-category">{item.title}</p>
                       <p class="card-title">{item.worth}</p>
                       <p></p>
                     </div>
                   </div>
                 </div>
               </div>
               <div class="card-footer">
                 <hr />
                 <div class="stats">
                   <i class={` ${item.icon1}`}></i> {item.task}
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
