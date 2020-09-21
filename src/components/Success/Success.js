import React from 'react';
import { useParams } from 'react-router-dom';
import hotelData from '../fakeData/hotelData';
import RoomDetail from '../RoomDetail/RoomDetail';
import './Success.css';

const Success = () => {
    const {hotelName} = useParams();
    const mon = hotelData.find(bookedRoom => bookedRoom.hotelName === hotelName)
    console.log(mon);
    return (
        <div className ="complete" >
           <h1> YOUR BOOKING IS COMPLETE  !!!!</h1>
            <RoomDetail showBooking={false} bookingPlace={mon}></RoomDetail>
           
        </div>
    );
};

export default Success;