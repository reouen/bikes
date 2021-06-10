import React, { useState } from 'react'
import Button from './Button'
import './Navbar.css'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function Navbar() {
    const {click, setClick} = useState(false)
    const handleClick = () => setClick(!click)
    
    return (
         <nav className="Navbar">
             <Link to="/" className="Navbar-logo">
             EPIC
             </Link>
             <div className="menu-icon">
             <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>

             </div>
             </nav>   
        
    )
}

export default Navbar
