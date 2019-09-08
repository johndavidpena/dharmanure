import React from 'react';
import headerStyles from './header.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
      <h1 className={headerStyles.title}>
        <Link to='/'>
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav className={headerStyles.nav}>
        <ul className={headerStyles.ul}>
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
}

export default Header;
