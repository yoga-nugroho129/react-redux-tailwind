import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../styles/framerAnimation';

const NotFound404 = () => {
  return (
    <motion.div className="bg-gray-100 h-screen flex flex-col justify-center items-center"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-xl md:text-4xl ">Oops! Page not found - 404</h1>
      <Link to="/">
        <button className="bg-blue-400 text-gray-50 rounded-lg px-6 py-3 my-5 hover:bg-blue-500">
          Home
        </button>
      </Link>
    </motion.div>
  );
};

export default NotFound404;
