import React from 'react';
import { Link, NavLink } from 'react-router';
import { SiWebauthn  } from "react-icons/si";


const SignUp = () => {
    
    const handleSignUp = () => {
        console.log('Sign Up Button Clicked!');
        
    }

    return (
        <>
        <div className="flex flex-col md:flex-row min-h-10 justify-between items-center p-10">
            <div className='md:max-w-8/12'>
                <h2 className='text-5xl md:text-9xl md:text-right 
                font-semibold m-5 md:p-3'><SiWebauthn />Welcome to React Auth Learn Project!</h2>
            </div>
            <div className='md:max-w-4/12 flex-col mx-auto 
            border border-amber-400 rounded-3xl p-2 md:p-[5%] bg-[#f8f8e6]'>
                <h3 className='text-2xl md:text-5xl m-5 md:p-3'>Sign Up</h3>
                <form action={handleSignUp} className='flex flex-col'>
                    <label for="email">Email: </label>
                    <input className='input input-neutral' type="email" name="email" placeholder="Type email address" />
                    <label for="password">Password: </label>
                    <input className='input input-neutral' type="password" name="password" placeholder="Type Password" />
                    <button className='btn btn-info mt-2' type="submit">Sign Up!</button>
                </form>
                <p>Already Have an Account <Link to={"/signin"}> <span className='font-bold underline'>Sign In</span></Link> here!</p>
            </div>
        </div>
        </>
    );
};

export default SignUp;