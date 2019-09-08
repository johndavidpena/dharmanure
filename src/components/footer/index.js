import React from 'react';
import footerStyles from './footer.module.css';

import { graphql, useStaticQuery } from 'gatsby';

import { FiTwitter, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={footerStyles.footer}>
      {/* Ensō by john melven from the Noun Project */}
      <a href='https://twitter.com/@PocktHerc' target='_blank' className={footerStyles.anchor} rel="noopener noreferrer"><FiTwitter /></a>
      <a href='https://www.facebook.com/john.pena.9404' target='_blank' className={footerStyles.anchor} rel="noopener noreferrer"><FiFacebook /></a>
      <a href='https://www.linkedin.com/in/john-pena-9758a5133/' target='_blank' className={footerStyles.anchor} rel="noopener noreferrer"><FiLinkedin /></a>
      <a href='https://www.youtube.com/dharmanure' target='_blank' className={footerStyles.anchor} rel="noopener noreferrer"><FiYoutube /></a>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  );
}

export default Footer;
