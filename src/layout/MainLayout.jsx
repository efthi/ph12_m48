import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <p>Main Page!</p>
         <Outlet></Outlet>   
        </>
    );
};

export default MainLayout;