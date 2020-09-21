import React, { useState } from 'react';
import fakeData from '../fakeData/fakeData';
import TouristPlace from '../TouristPlace/TouristPlace';
import './Details.css'

const Details = () => {
  const data = fakeData;
  const[places, setPlaces] = useState(data);


    return (
        <div className = "container">
          <div className="detail-container">
           
          
        </div>
          <div>
           
          </div>
               
       <div className="place-container">
      
          {
            places.map(place => <TouristPlace place = {place}>{place.name}</TouristPlace>)

          }
        
       </div>
        
    </div>
    );
};

export default Details;
