import React from 'react';
import headerStyles from './header.module.css';

import { Link, graphql, useStaticQuery } from 'gatsby';

import { FiHome } from "react-icons/fi";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
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
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
}

export default Header;
