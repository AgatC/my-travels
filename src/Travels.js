import React from "react";
import Travel from "./Travel"; 

const travels = [
  {
     destination:<h1>Montreal</h1>,
     country:"Canada",
     photo:"https://cdn.pixabay.com/photo/2012/02/28/00/49/squirrel-17854_960_720.jpg",
     distance : "5717 km",
  },
  {
    destination:<h1>Cinque Terre</h1>,
     country:"Italie",
     photo:"https://cdn.pixabay.com/photo/2015/03/10/00/09/cinque-terre-666601_960_720.jpg",
     distance : "847 km",
  },
  {
    destination:<h1>San Francisco</h1>,
     country:"USA",
     photo:"https://cdn.pixabay.com/photo/2014/07/10/10/20/golden-gate-bridge-388917_960_720.jpg",
     distance : "9341 km",
  },
  {
    destination:<h1>New York</h1>,
     country:"USA",
     photo:"https://cdn.pixabay.com/photo/2014/05/03/01/04/manhattan-336708_960_720.jpg",
     distance : "6001 km",
  },
  {
    destination:<h1>Sanya</h1>,
     country:"Chine",
     photo:"https://cdn.pixabay.com/photo/2017/06/24/15/16/sanya-2437983_960_720.jpg",
     distance : "9984 km",
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
    ))}
  </div>
);

export default Travels;
