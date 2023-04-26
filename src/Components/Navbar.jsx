import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTypo3 } from '@fortawesome/free-brands-svg-icons' 
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from './Button';
import './Navbar.css'

function Navbar() {
    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>TRVL
                <FontAwesomeIcon icon={faTypo3} />
            </Link>
            <div className="menu-icon">
                <FontAwesomeIcon onClick={() => setClick(!click)} icon={click ? faXmark : faBars} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={() => setClick(false)}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" className="nav-links" onClick={() => setClick(false)}>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/products" className="nav-links" onClick={() => setClick(false)}>Products</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/sign-up" className="nav-links" onClick={() => setClick(false)}>Sign Up</Link>
                </li>
            </ul>
            {button && <Button buttonStyle="btn--outline" onClick={() => setClick(false)}>Sign Up</Button>
            
            }
        </div>
    </nav>
    </>
  )
}

export default Navbar