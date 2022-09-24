import React from 'react';
import './style.css';
import Menu from './components/Menu';

export default function App() {
  return (
    <div className="page">
      <div className="sidebar">
        <Menu />
      </div>
      <div></div>
    </div>
  );
}
