import React from 'react';
import headerStyles from './header.module.css';

import { Link } from 'gatsby';

import { FiHome } from "react-icons/fi";

const Header = () => (
  <header>
    <nav className={headerStyles.nav}>
      <ul className={headerStyles.ul}>
        <li className={headerStyles.li}>
          <Link to='/'
            className={headerStyles.anchor}
            activeClassName={headerStyles.active}><FiHome /></Link>
        </li>
        <li className={headerStyles.li}>
          <Link to='/blog'
            className={headerStyles.anchor}
            activeClassName={headerStyles.active}>Blog</Link>
        </li>
        <li className={headerStyles.li}>
          <Link to='/about'
            className={headerStyles.anchor}
            activeClassName={headerStyles.active}>About</Link>
        </li>
        <li className={headerStyles.li}>
          <Link to='/contact'
            className={headerStyles.anchor}
            activeClassName={headerStyles.active}>Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;



