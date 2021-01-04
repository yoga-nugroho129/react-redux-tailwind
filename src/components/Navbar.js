import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../redux';
import { MdMenu, MdChevronLeft } from 'react-icons/md';

const Navbar = props => {
  const { 
    isSidebarOpen,
    toggleSidebar
  } = props;

  return (
    <div className="navbar">
      <div className={`topbar w-full shadow bg-white py-2 z-10 fixed inset-x-0 top-0 transition-all duration-300 ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="container flex justify-between items-center">
          <div className="left-section">
            {
              !isSidebarOpen &&
                <button className="p-1 rounded hover:text-gray-500 text-2xl" onClick={ toggleSidebar } >
                  <MdMenu />
                </button>
            }
          </div>
          <div className="right-section flex">
            <button className="p-2 mr-4">lang</button>
            <button className="profile rounded-full bg-aqua">Me</button>
          </div>
        </div>
      </div>
      <div className={`sidebar w-64 h-screen z-20 fixed bg-indigo-600 top-0 transition-all duration-300 p-3 md:p-5 text-gray-200 font-medium ${isSidebarOpen ? "left-0" : "-left-64"}`} >
        <div className="top-section">
          <button className="text-2xl hover:text-gray-300 text-right" onClick={ toggleSidebar }>
            <MdChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSidebarOpen: state.sidebarToggle.isSidebarOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
