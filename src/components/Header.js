import React from 'react'
import { Link } from 'react-router-dom';

import '../style/Header.css';

const Header = () => {
  const logoUrl = "https://static.wixstatic.com/media/b49693_0955e025ef624a7e9c3f5a0668331379~mv2.png/v1/crop/x_0,y_8,w_418,h_132/fill/w_155,h_52,al_c,q_85,usm_0.66_1.00_0.01/b49693_0955e025ef624a7e9c3f5a0668331379~mv2.webp"

  return ( 
  <nav className="navbar navbar-expand-lg">
    <img src={logoUrl} width="120" height="40" className="d-inline-block align-top" alt="" />
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link" href="#">Inicio</Link>
        <Link to="favorites" className="nav-item nav-link">Favoritos</Link>
      </div>
    </div>
  </nav>
  )
}

export default Header;