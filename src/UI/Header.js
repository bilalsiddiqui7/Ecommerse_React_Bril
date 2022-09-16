import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <img className='logo-img' src={image} height={50} width={50} />
        {/* Brand */}
        <Link to='/'>
          <a className="navbar-brand" href="">
            HandyKrafts
          </a>
        </Link>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <Link to='/home'>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <Link to='/'>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </Link>
            <Link to='/registration'>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </Link>
          </ul>
        </div> 
        <Link to='/cart'>
          <h4 style={{color:'white'}}> <FaShoppingCart /> </h4>
        </Link>
      </nav>

    </>
  )
}

export default Header