import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = () => {
    
    return (
        
        <nav className = 'navbar'>
            
            <ul className = 'nav-links'>
            <li className = 'nav-item'>
            <NavLink to = '/' exact activeClassName="active" className = 'link'>All Blogs</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/blogs/admin' className = 'link' activeClassName="active">Admin</NavLink>
            </li>
            {/* <li className = 'nav-item'>
            <NavLink to = '/newchirp' activeClassName="active" className = 'link'>Post New Chirp</NavLink>
            </li> */}
            </ul>


        </nav>
     
    )
}

export default Navbar