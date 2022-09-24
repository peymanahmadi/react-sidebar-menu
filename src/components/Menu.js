import React, { useState } from 'react';
import './Menu.css';
import MenuConfig from './MenuConfig.json';
import Header from './Header';
import DropDown from './DropDown';

const Menu = () => {
  const [showItem, setShowIetm] = useState();
  
  return (
    <div className="sidebar">
      {MenuConfig.menus.map((menu) => {
        if (menu.type === 'header') {
          return <Header key={menu.title} title={menu.title} />;
        }
        if (menu.type === 'dropdown') {
          return (
            <DropDown
              key={menu.title}
              title={menu.title}
              subMenu={menu.submenus}
            />
          );
        }
        if (menu.type === 'simple') {
          return <li key={menu.title}>{menu.title}</li>;
        }
      })}
    </div>
  );
};

export default Menu;
