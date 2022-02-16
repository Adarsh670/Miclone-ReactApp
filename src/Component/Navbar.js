import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Img/logo.svg';
const Navbar = () => {
    const searchIcon=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    return (
        <div className="nav">
            <div className="logo">
                <Link to='/dfs'><img id="logoImg" src={logo} alt="" /></Link>
                <h4>Mi</h4>
            </div>
            <div className="navLink">
                <input type="checkbox" id='click'/>
                <label htmlFor="click" className='menu-btn'>
                <i class="fas fa-bars"></i>
                </label>
                <ul>
                    <li><Link className="navLinks" to='/miphones'>Mi Phones</Link></li>
                    <li><Link className="navLinks" to='/redmiphones'>Redmi Phones</Link></li>
                    <li><Link className="navLinks" to='/tv'>TV</Link></li>
                    <li><Link className="navLinks" to='/laptop'>Laptops</Link></li>
                    <li><Link className="navLinks" to='/fitness'>Fitness</Link></li>
                    <li><Link className="navLinks" to='/home'>Home</Link></li>
                    <li><Link className="navLinks" to='/audio'>Audio</Link></li>
                    <li><Link className="navLinks" to='/accessoreis'>Accessories</Link></li>
                </ul>
            </div>
            <div className="searchBox">
                <input type="text" placeholder='Search Product..' />
                {searchIcon}
            </div>
            
        </div>
    )
}

export default Navbar