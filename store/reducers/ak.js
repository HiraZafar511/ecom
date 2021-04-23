const initialstate = {
    data: [
      {
       
        name: "George Anderson",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
      
        name: "Megan Bird ",
        detail: "12 Nov 2019, 5.00 PM",
        state: "North Carolina, United States",
        email: "charlenereed@example.com",
        num: "+1 828 632 9170",
      },
      {
      
        name: "Alvin Boykin",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
       
        name: "Nicholas Hicks",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
    
        name: "Sherri McCarthy",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
       
        name: "Roger Loyd",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
     
        name: "Francis Giordano",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
       
        name: "Kate Mason",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
       
        name: "George Anderson",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
       
        name: "Glenn Johnson",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
      {
      
        name: "Monty Smith",
        detail: "14 Nov 2019, 10.00 AM",
        state: "Newyork, United States",
        email: "richard@example.com",
        num: "+1 923 782 4575",
      },
    ],
  };
  const ak = (state = initialstate, action) => {
      switch (action.type) {
        case "AK":
          return {
            ...state,
            ak: state.ak,
          };
          default:
          return state;
      }
    };
    export default ak;