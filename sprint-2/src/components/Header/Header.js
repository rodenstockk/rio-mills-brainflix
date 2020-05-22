import React from 'react';
import logoBrainFlix from '../../assets/Logo/Logo-brainflix.svg';
import imgNavSearch from '../../assets/Icon/Icon-search.svg';
import imgNavUpload from '../../assets/Icon/Icon-upload.svg';
import './Header.scss';

import {Link} from 'react-router-dom';



const Header = () => {
    return (
      <header className="header">
        <Link to="/1af0jruup5gu" className="header__link"><img src={logoBrainFlix} className="header__logo" alt="Logo"/></Link>
        <nav className="header__nav">
            <div className="header__nav-search">
              <img src={imgNavSearch} alt="imgNavSearch"/>
              <span>Search</span>
            </div>
            <div className="header__nav-side">
              <div className="header__nav-side--upload">
                  <img src={imgNavUpload} alt="imgNavUpload"/>
                  <span><Link to="/upload" className="header__nav-side--upload-link">UPLOAD</Link></span>
              </div>
              <div className="header__nav-side--person"></div>
            </div>
        </nav>
      </header>
    );
  }


export default Header;