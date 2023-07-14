import React from 'react';
import * as loginAnimation from './../../assets/animation/login.json';
import Lottie from 'react-lottie';
import FormLogin from '../../Components/FormLogin/FormLogin';
const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex">
      {/* // animation  */}
      <div className="w-1/2">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="w-1/2">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
