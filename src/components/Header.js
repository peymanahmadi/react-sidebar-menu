import React from 'react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <li>{title}</li>
    </div>
  );
};

export default Header;
