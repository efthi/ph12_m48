import React from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { SiWelcometothejungle } from "react-icons/si";

const SignIn = () => {

    const handleSignIn = () => {
        console.log('Sign In Clicked!');
        
    }

    return (
        <>
        <div className="flex flex-col md:flex-row min-h-10 justify-between items-center p-10">
            <div className='md:max-w-8/12'>
                <h2 className='text-5xl md:text-9xl md:text-right font-semibold m-5 md:p-3'><SiWelcometothejungle /> Welcome Back! Good to See ya!</h2>
            </div>
            <div className='md:max-w-4/12 flex-col mx-auto 
            border border-amber-400 rounded-3xl p-2 md:p-[5%] bg-[#00bf83]'>
                <h3 className='text-2xl md:text-5xl m-5 md:p-3'>Sign In</h3>
                <form action={handleSignIn} className='flex flex-col'>
                    <label for="email">Email: </label>
                    <input className='input input-neutral' type="email" name="email" placeholder="Type email address" />
                    <label for="password">Password: </label>
                    <input className='input input-neutral' type="password" name="password" placeholder="Type Password" />
                    <button className='btn btn-warning mt-2' type="submit">Sign In!</button>
                </form>
                <p>Don't have an Account? <Link to={"/signup"}> <span className='font-bold underline'>Sign Up</span></Link> here!</p>
                <div className="divider"></div>
                <button className='btn btn-neutral'><FcGoogle /> Login with Google Account!</button>
            </div>
        </div>
        </>
    );
};

export default SignIn;