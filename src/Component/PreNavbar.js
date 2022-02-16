import React from 'react'
import {Link} from 'react-router-dom';
const PreNavbar = () => {
  return (
    <>
      <div className="preNav">
        <div>
          <Link to='/'>MI INDIA<span>|</span></Link>
          <Link to='/'>GET MI STORE APP<span>|</span></Link>
          <Link to='/'>ONLINE HELP<span>|</span></Link>
          <Link to='/'>RETAIL STORE</Link>
        </div>
        <div>
          <Link to='/'>SIGN IN<span>|</span></Link>
          <Link to='/'>SIGN UP<span>|</span></Link>
          <Link to='/'>CART(0)</Link>
        </div>
      </div>
    </>
  )
}

export default PreNavbar