import React from 'react'
import logo from '../../Components/NetflixLogo.png'
import {Link} from 'react-router-dom'
import { ImSearch } from "react-icons/im";

const Header = () => {

  return (
    <nav className='header'>
      <Link to="/">
      <img src = {logo}  className="Netflix-logo" alt = "Netflix Logo" />
      </Link>

      <div>
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recent">Recently Added</Link>
          <Link to="/mylist">My List</Link>

      </div>

      <ImSearch className = "search-icon" />

    </nav>
  )
}

export default Header