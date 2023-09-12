import React from 'react'
import './nav.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='First'>
            <img src="./assets/schooled.png" alt="" className='logo' />
        </div>


        <div className='Second'>
            <a href="https://fontawesome.com/icons/linkedin?f=brands&s=solid" className='navlinks'>Home</a>
            <a href="https://fontawesome.com/icons/linkedin?f=brands&s=solid" className='navlinks'>About</a>
            <a href="https://fontawesome.com/icons/linkedin?f=brands&s=solid" className='navlinks'>Services</a>
            <a href="https://fontawesome.com/icons/linkedin?f=brands&s=solid" className='navlinks'>Testimonial</a>
            <a href="https://fontawesome.com/icons/linkedin?f=brands&s=solid" className='navlinks'>Contact</a>
        </div>


        <div className='Third'>
            <i className="fa-solid fa-phone navicons"></i>
            <i className="fa-solid fa-envelope navicons"></i>
            <i className="fa-brands fa-github navicons"></i>
            <i className="fa-brands fa-linkedin navicons"></i>
        </div>
    </div>
  )
}

export default Navbar