import React from 'react';
import { connect } from 'react-redux';

const HomePage = props => {
  const { isSidebarOpen } = props;

  return (
    <div className={`homepage mt-14 bg-gray-200 min-h-screen transition-all duration-300 ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="container">
        <h3 className="text-center">HomePage</h3>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSidebarOpen: state.sidebarToggle.isSidebarOpen
  };
};

export default connect(mapStateToProps)(HomePage);
