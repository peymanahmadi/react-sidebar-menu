import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './DropDown.css';

const DropDown = ({ title, subMenu }) => {
  const [showSubMenu, setShowSubMenu] = useState();

  const handleSubMenu = () => {
    setShowSubMenu((prev) => !showSubMenu);
  };

  return (
    <>
      <div className="dropdown" onClick={handleSubMenu}>
        <li className="dropdown-menu">
          <div>{title}</div>
          <MdKeyboardArrowRight />
        </li>
      </div>
      {showSubMenu && (
        <div className="subMenu">
          {subMenu.map((sub) => {
            return <li className="submenuItem" key={sub.title}>{sub.title}</li>;
          })}
        </div>
      )}
    </>
  );
};

export default DropDown;
