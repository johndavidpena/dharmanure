import React from 'react';
import '../../styles/index.css';
import layoutStyles from './layout.module.css';

import Header from '../header';
import Footer from '../footer';

const Layout = props => (
  <>
    <Header />
    <main className={layoutStyles.content}>
      {props.children}
    </main>
    <Footer />
  </>
);

export default Layout;
