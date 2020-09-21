import React from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { useParams } from 'react-router-dom';
import hotelData from '../fakeData/hotelData';

const LocationPin = ({ text }) => (
    <div className="pin">
      <RoomIcon  className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = (props) => {
    const {touristSpot} = useParams();
    const mapDetails = hotelData.find(city => city.name === touristSpot);
    const hotelDetails = hotelData.filter(city => city.name === touristSpot);
    
    const defaultProps = mapDetails.center;
        const pins ={ 
            hotel1 : hotelDetails[0].hotelName,
            hotel2 : hotelDetails[1].hotelName, 
            hotel3 : hotelDetails[2].hotelName
        };       
      
    return (
        <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBbewXl9gMDHoZxpTbYljBi_YBbkS_7H5Y" }}
          defaultCenter={defaultProps}
          defaultZoom={15}
        >
            <LocationPin
          
          text={pins.hotel1}
        />
        <LocationPin
          
          text={pins.hotel2}
        />
        <LocationPin
          
          text={pins.hotel3}
        />
          
        </GoogleMapReact>
      </div>
    );
};

export default Map;