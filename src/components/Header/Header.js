import React from 'react';
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className='header'>
        <Link to="/" className='title'>
        Neog quiz App
        </Link>
        <hr className='divider'/>
        
        
    </div>
  )
}

export default Header