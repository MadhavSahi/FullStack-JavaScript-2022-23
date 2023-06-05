import React from 'react';
import { ThemeContext } from "../ThemeContext";
import { useContext,useEffect } from 'react';
// import './header.css';
// import '../App.css';
import '../DarkMode.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => { //this is for applying changes of dark theme.
    document.body.className = theme; // this is to apply the changes on whole body
    // document.body.className+="darkk";
  }, [theme]);
  return (
    <>
       <header className={`App ${theme}`}>
        <ul className='header-nav'>
            <li className='li-header'>Home</li>
            <li><button onClick={toggleTheme}>Toggle Theme</button></li>
            <li className='li-header'>Contact</li>
            <li className='li-header'>Dashboard</li>
            <li className='li-header'>T n C</li>
            {/* <li className='li-header'>About Us</li> */}
        </ul>
        </header>
    </>
  )
}

export default Header