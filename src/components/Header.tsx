import { Link } from 'react-router-dom';
import logo from '../resources/samaya-logo.webp'

import '../style/Header.css';

const Header = () => {
  return ( 
  <nav className="navbar">
    <img src={logo} className="logo" alt="logo" />
    <div className="navbar-nav">
      <Link to="/" className="nav-item">Inicio</Link>
      <Link to="favorites" className="nav-item">Favoritos</Link>
    </div>
  </nav>
  )
}

export default Header;