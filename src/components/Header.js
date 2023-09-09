import React, { useEffect, useState } from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

import styles from '../styles/headers.css';

const Header = () => {

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
          let moving = window.pageYOffset
          
          setVisible(position > moving);
          setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
          window.removeEventListener("scroll", handleScroll);
      })
  })

  const cls = visible ? "visible" : "hidden";

  return <header className='fixed w-full px-[30px] 
  lg:px-[100px] z=30 h-[100px] lg:h-[140px] 
  flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

      <Link to={'/'} >
        <h2>ABDC XYZ</h2>
      </Link>

      <nav className='hidden xl:flex gap-x-12 
      font-semibold'>

        <Link
          to={'/portfolio'}
          className='text-[#696c6d] hover:text-primary transition'
        >
          Portfolio
        </Link>
        <Link
          to={'/'}
          className='text-[#696c6d] hover:text-primary transition'
        >
          Contact
        </Link>

      </nav>
    </div>

      <Socials/>

      <MobileNav/>
  </header>;
};

export default Header;
