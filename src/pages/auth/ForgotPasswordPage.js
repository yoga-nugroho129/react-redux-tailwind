import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../../styles/framerAnimation';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState({});

  const onChange = e => {
    setEmail({ email: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <motion.div className="forgot-password-page bg-gray-100 py-10 md:py-20"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container flex justify-center my-10">
        <div className="forgot-password-card bg-white border-lg shadow rounded-lg overflow-hidden w-auto md:w-2/5">
          <div className="forgot-password-header bg-gradient-to-l to-indigo-500 from-blue-400 flex justify-between items-center">
            <div className="forgot-password-header-text text-gray-200 py-6 pl-6">
              <p className="text-xl font-semibold">Password Reset</p>
              <p className="pt-1 pb-3">Reset password by email</p>
            </div>
            <img src="/assets/images/forgot-password.svg" className="self-end pr-6 h-20" alt="reset"/>
          </div>
          <div className="forgot-password-form p-6">
            <div className="logo-container h-20 w-20 rounded-full bg-gray-200 -mt-12"></div>
            <form onSubmit={onSubmit}>
              <div className="form-group my-4">
                <label htmlFor="email" className="text-gray-500 text-sm inline-block mb-1">Email</label>
                <div className="input-field rounded flex items-center border-2 border-gray-300 px-2 py-1 rounded-lg">
                  <div className="icon h-6 w-6 bg-gray-200 rounded-full"></div>
                  <input type="email" name="email" id="email" placeholder="Enter email" onChange={onChange} className="border-none w-full focus:outline-none p-2"/>
                </div>
              </div>
              <div className="action-btn flex justify-between items-center">
                <button type="submit" className="bg-green-500 hover:bg-green-400 mt-2 px-4 py-2 rounded-lg text-gray-100 w-full">
                  Reset
                </button>
              </div>
              <div className="register-link text-sm mt-6 text-center">
                <span className="text-gray-500">Remember it?</span>
                <span className="text-green-500 hover:text-green-400 hover:underline ml-1">
                  <Link to="/login">Sign In Now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;
