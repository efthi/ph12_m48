import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({to, className, children}) => {
    return (
        <>
         <NavLink to ={to}
            className={({isActive}) =>
                isActive ? "text-red-800 underline font-extrabold" : `${className} font-bold`
            }
         >
            {children}
        </NavLink>   
        </>
    );
};

export default MyLinks;