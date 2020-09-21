import React from 'react';
import { Link } from 'react-router-dom';
import './TouristPlace.css'

const TouristPlace = (props) => {
    const {picture,name} = props.place

    return (
        <div class="gallery">
  <h2>{name}</h2>
        <Link to = {"/booking/" + name}>
    <img src={picture} alt="" width="600" height="400" />
        </Link>
  
</div>
       
    );
};

export default TouristPlace;