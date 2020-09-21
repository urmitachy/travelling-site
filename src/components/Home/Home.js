import React from 'react';
import Details from '../Details/Details';
import Header from '../Header/Header';
import './Home.css'




const Home = () => {
    return (
        <div className = "home">
            <Header></Header>
           <Details></Details>
        </div>
    );
};

export default Home;