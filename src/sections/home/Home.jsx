import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/icons/logo.png';
import "./home.css";
import "./custom.js"

const Menu = ({ closeMenu }) => {
  return (
    <>
      <div className="nav-links-mobile">
        <ul>
          <li>
            <a href="#Services" onClick={closeMenu}>Services</a>
            <a href="#Pricing" onClick={closeMenu}>Pricing</a>
            <a href="#Case Study" onClick={closeMenu}>Case Study</a>
            <a href="#About" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="home">
      <div className="wrapper">
     
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
            <a href="https://devbuild-agency.vercel.app/"><h2>devsbuild.</h2></a>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#Services">Services</a>
                <a href="#Pricing">Pricing</a>
                <a href="#Case Study">Case Study</a>
                <a href="#About">About</a>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button type="button" href="#contact" id="cta" className="nav-button">Let's Talk <span></span></button>
          </div>
          
          <div className="navbar-menu" ref={menuRef}>
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu closeMenu={closeMenu} />
                </div>
              </div>
            )}
          </div>
        </div>    
        <div className="title">
            <h3>We build digital products, brands, and experience.</h3>
            <p>Building excitement around your vision and accelerating your growth</p>
          </div>   

      </div>
    </div>
  );
};

export default Home;