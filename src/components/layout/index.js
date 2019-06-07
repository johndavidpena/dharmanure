import React from 'react';
import '../../styles/index.css';
import layoutStyles from './layout.module.css';

import Header from '../header';
import Footer from '../footer';

const Layout = props => (
  <div className={layoutStyles.content}>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
