import React, { useState } from "react";
import { Link } from 'gatsby'

const SiteNav = () => {
    const [isActive, setActive] = useState("false");
  
    const handleToggle = () => {
      setActive(!isActive);
    };


    return (
        <nav id="main-nav" className={`site-nav ${isActive ? "" : "open"}`}>
        <Link to="#" class="menu-toggle" onClick={handleToggle}>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
        </Link>
              <ul>
                  <li><Link to="/" class="nav-link-text" activeClassName="active">
                Home
              </Link></li>
                  <li><Link to="/portfolio" class="nav-link-text" activeClassName="active">
                Portfolio
              </Link></li>
              </ul>
          </nav>
      );
}

export default SiteNav
