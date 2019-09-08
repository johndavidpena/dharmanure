import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import homeStyles from '../styles/home.module.css';

const HomePage = () => (
  <Layout>
    <Head title='Home' />

    <div className={homeStyles.container}>
      <p className={homeStyles.text}><span className={homeStyles.highlight}>dharma</span> can be defined as an aspect of truth or reality. I tend to think of it as life purpose and I seem to be continuously looking for it.</p>
    </div>

    <div className={homeStyles.container}>
      <p className={homeStyles.text}><span className={homeStyles.highlight}>manure</span> refers to animal dung that is used to fertilize the land. Not the most pleasant term but a beautiful demonstration of something that nobody wants that serves a great purpose.</p>
    </div>

    <div className={homeStyles.container}>
      <p className={homeStyles.text}>This simple word combination adequately reflects many moments in my life up to this point. Sometimes you live with purpose, sometimes you're stepping in it!</p>
    </div>
  </Layout>
);

export default HomePage;

