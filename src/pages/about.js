import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

const AboutPage = () => (
  <Layout>
    <Head title='About' />

    <div className={homeStyles.container}>
      <p className={homeStyles.text}>This site is an example of headless CMS and React. This particular site has been created with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, a "blazing fast modern site generator for React."</p>
    </div>

    <div className={homeStyles.container}>
      <p className={homeStyles.text}>The content management system being used is <a href="https://www.contentful.com/" target="_blank">Contentful</a>, the "essential API-first content management infrastructure to create, manage and distribute content to any platform or device."</p>
    </div>

    <div className={homeStyles.container}>
      <p className={homeStyles.text}>The site is hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>.</p>
    </div>
  </Layout>
);

export default AboutPage;
