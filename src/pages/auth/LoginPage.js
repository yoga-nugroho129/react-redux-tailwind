import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../../styles/framerAnimation';
import { CgSpinner } from 'react-icons/cg';

const LoginPage = props => {
  const { isLogin, isLoadingButton } = props;

  const [dataForm] = useState([
    { label: "Email", name: "email", placeholder: "Enter Email" },
    { label: "Password", name: "password", placeholder: "Enter Password" }
  ]);

  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    const login = {...dataLogin};
    login[e.target.name] = e.target.value;
    setDataLogin(login);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(dataLogin);
  };

  return (
    <motion.div className="login-page bg-gray-100 py-10"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container flex justify-center my-10">
        <div className="login-card bg-white border-lg shadow rounded-lg overflow-hidden w-auto md:w-2/5">
          <div className="login-header bg-gradient-to-l to-indigo-500 from-blue-400 flex justify-between items-center">
            <div className="login-header-text text-gray-200 py-6 pl-6">
              <p className="text-xl font-semibold">Welcome!</p>
              <p className="pt-1 pb-3">Please Sign in to Continue</p>
            </div>
            <img src="/assets/images/login.svg" className="self-end pr-6 h-20" alt="login"/>
          </div>
          <div className="login-form p-6">
            <div className="logo-container h-20 w-20 rounded-full bg-gray-200 -mt-12"></div>
            <form onSubmit={onSubmit}>
              {
                dataForm.map( data => {
                  return (
                    <div className="form-group my-4" key={data.name}>
                      <label htmlFor={data.name} className="text-gray-500 text-sm inline-block mb-1">{data.label}</label>
                      <div className="input-field rounded flex items-center border-2 border-gray-300 px-2 py-1 rounded-lg">
                        <div className="icon h-6 w-6 bg-gray-200 rounded-full"></div>
                        <input type={data.name} name={data.name} id={data.name} placeholder={data.placeholder} onChange={onChange} className="border-none w-full focus:outline-none p-2" />
                      </div>
                    </div>
                  )
                })
              }
              <div className="action-btn flex justify-between items-center">
                <button type="submit" className="bg-green-500 hover:bg-green-400 mt-2 px-4 py-2 rounded-lg text-gray-100 w-20 text-center" disabled={isLoadingButton} >
                  { isLoadingButton ? <CgSpinner className="animate-spin" /> : "Sign In" }
                </button>
                <Link to="/forgot-password">
                  <button className="bg-transparent text-green-500 hover:text-green-400 hover:underline text-sm">
                    Forgot password?
                  </button>
                </Link>
              </div>
              <div className="register-link text-sm mt-6 text-center">
                <span className="text-gray-500">Don't have account?</span>
                <span className="text-green-500 hover:text-green-400 hover:underline ml-1">
                  <Link to="/register">Sign Up Now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const mapStateToProps = state => {
  return {
    isLogin: state.userLogin.isLogin,
    userData: state.userLogin.userData,
    isLoading: state.userLogin.isLoading,
    isLoadingButton: state.userLogin.isLoadingButton
  }
};

export default connect(mapStateToProps)(LoginPage);
