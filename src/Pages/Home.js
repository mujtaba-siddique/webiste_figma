import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from '../Components/Navbar';
import LandingPage from '../Components/LandingPage';

const Home = () => {

    return (
        <div>
            <Navbar />
            <LandingPage/>
        </div>
    );
};

export default Home;
