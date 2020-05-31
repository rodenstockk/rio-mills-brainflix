import React from 'react';
import logoBrainFlix from '../../assets/Logo/Logo-brainflix.svg';
import imgNavSearch from '../../assets/Icon/Icon-search.svg';
import imgNavUpload from '../../assets/Icon/Icon-upload.svg';
import './Header.scss';

import {Link} from 'react-router-dom';



const Header = () => {
    return (
      <header>
        <Link to="/" className="link"><img src={logoBrainFlix} className="logo" alt="Logo"/></Link>
        <nav className="nav">
            <div className="nav__search">
              <img src={imgNavSearch} alt="imgNavSearch"/>
              <span>Search</span>
            </div>
            <div className="nav__side">
              <div className="nav__side-upload">
                  <img src={imgNavUpload} alt="imgNavUpload"/>
                  <span><Link to="/upload" className="nav__side-uploadlink">UPLOAD</Link></span>
              </div>
              <div className="nav__side-person"></div>
            </div>
        </nav>
      </header>
    );
  }


export default Header;