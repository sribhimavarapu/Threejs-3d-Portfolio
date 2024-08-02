import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header flex justify-between items-center p-4'>
      <NavLink to='/' className="w-20 rounded-lg bg-white flex align-middle justify-center">
        <p className='blue-gradient_text'>BSKCR</p>
      </NavLink>
      <nav className='hidden md:flex text-lg gap-7 font-medium z-50'>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Contact
        </NavLink>
      </nav>
      {/* Collapsible menu for small screens */}
      {/* {isMenuOpen && (
        <nav className='absolute top-16 left-0 w-full bg-white shadow-md rounded-md flex flex-col items-center gap-4 p-4 md:hidden'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={toggleMenu}>
            Contact
          </NavLink>
        </nav>
      )} */}
    </header>
  );
};

export default Navbar;
