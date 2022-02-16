import React from 'react';
import { Link } from 'react-router-dom';

const Hotaccessories = () => {
  return (
    <div className="container-fluid hotaccessories">
        <ul>
            <li><Link to='/music'>Music Store</Link></li>
            <li><Link to='/smartDevice'>Smart Device</Link></li>
            <li><Link to='/mobileAccessories'>Mobile Accessories</Link></li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/lifeStyle'>Lifestyle</Link></li>
        </ul>

    </div>
  )
}

export default Hotaccessories