import React from 'react';
import backgroundImage from '../assets/img/login-bg.jpg';
import { Logo } from '../components/logo';
import MicrosoftIcon from '../assets/icons/microsoft.png';
import { FcGoogle } from "react-icons/fc";

function Login() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='h-screen w-screen flex items-center justify-center' style={divStyle}>
      <div className='bg-white p-8 rounded-lg'>
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className='text-2xl font-bold mb-8'>
          Welcome Back!
        </div>

        <div>
          <a href="" className="flex items-center cursor-pointer border border-hol-grey-light rounded-md p-2 pl-4 pr-4 mb-4">
            <img src={MicrosoftIcon} alt='Microsoft Icon' className='w-4 h-4' />
            <span className="ml-4 text-lg">Sign in with Microsoft</span>
          </a>
        </div>

        <div>
          <a href="" className="flex items-center cursor-pointer border border-hol-grey-light rounded-md p-2 pl-4 pr-4 mb-2">
            <FcGoogle />
            <span className="ml-4 text-lg">Sign in with Google</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Login;
