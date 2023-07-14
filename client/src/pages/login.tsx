import React from 'react';
import backgroundImage from '../assets/img/login-bg.jpg';
import { useAuth0, Auth0ProviderOptions } from '@auth0/auth0-react';
import { Logo } from '../components/logo';
import MicrosoftIcon from '../assets/icons/microsoft.png';
import { FcGoogle } from 'react-icons/fc';


function Login() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({ returnTo: '/chat' } as any);
  };


  return (
    <div className='h-screen w-screen flex items-center justify-center' style={divStyle}>
      <div className='bg-white p-10 rounded-lg'>
        <div className='flex justify-center'>
          <Logo />
        </div>

        <div className='text-xl mb-8 font-bold'>
          Welcome Back!
        </div>

        <div>
          <button
            className='flex items-center cursor-pointer border border-hol-grey-light rounded-md p-2 pl-4 pr-8 mb-4'
            onClick={() => handleLogin()}
          >
            <FcGoogle />
            <span className='ml-4 text-lg'>Sign in with Google</span>
          </button>
        </div>

        <div>
          <button
            className='flex items-center cursor-pointer border border-hol-grey-light rounded-md p-2 pl-4 pr-4'
            onClick={() => handleLogin()}
          >
            <img src={MicrosoftIcon} alt='Microsoft Icon' className='w-4 h-4' />
            <span className='ml-4 text-lg'>Sign in with Microsoft</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
