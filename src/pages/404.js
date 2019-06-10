import React from 'react';
import Head from '../components/head';

import { Link } from 'gatsby';

import Layout from '../components/layout';

const NotFound = (props) => {
  return (
    <Layout title='Not Found'>
      <Head />
      <h1>Page Not Found</h1>
      <p><Link to='/'>Head Home</Link></p>
    </Layout>
  );
};

export default NotFound;
