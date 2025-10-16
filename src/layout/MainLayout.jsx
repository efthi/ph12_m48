import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar'
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
         <Outlet></Outlet> 
         <Showcase></Showcase>  
         <Footer></Footer>
        </>
    );
};

export default MainLayout;