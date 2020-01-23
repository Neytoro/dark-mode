import React, { useState, useEffect } from 'react';

import useData from '../useData';
import useDarkMode from '../useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [enabled, enable, enableDarkMode] = useData('darkMode', true);
  const [ddd, setDDD, processDarkMode] = useDarkMode(enabled);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
    processDarkMode(darkMode);
    enableDarkMode(!enabled);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
