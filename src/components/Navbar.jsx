import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import './nav-bar.css';
import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    function updateNavbarBackground() {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#115c1c';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    }

    updateNavbarBackground();
    window.addEventListener('scroll', updateNavbarBackground);

    return () => {
      window.removeEventListener('scroll', updateNavbarBackground);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="hero" smooth={true} duration={500} offset={-100}>
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <ul className='navLinks'>
        <li><Link to="story" smooth={true} duration={500} offset={-100}>ABOUT</Link></li>
        <li><Link to="features" smooth={true} duration={500} offset={-200}>FEATURES</Link></li>
        <li><Link to="directions" smooth={true} duration={500} offset={-200}>DIRECTIONS</Link></li>
        <li><Link to="teachers" smooth={true} duration={500} offset={-100}>TEACHERS</Link></li>
        <li><Link to="questions" smooth={true} duration={500} offset={-200}>FAQ</Link></li>
      </ul>
      <Link to="join" smooth={true} duration={500}>
        <button className='navbarBtn'>JOIN US</button>
      </Link>
    </nav>
  );
}

export default Navbar;
