import React, {useState} from 'react'
import logo from '../../Components/NetflixLogo.png'
import {Link} from 'react-router-dom'
import { ImSearch } from "react-icons/im";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to="/">
      <img src = {logo}  className="Netflix-logo" alt = "Netflix Logo" />
      </Link>

      <div>
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recent">Recently Added</Link>
          <Link to="/mylist">My List</Link>

      </div>
      <button onClick={toggleMenu}>
      
      </button>
      <ImSearch className = "search-icon" />

    </nav>
  )
}

export default Header