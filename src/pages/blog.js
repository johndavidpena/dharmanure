import React from 'react';
import Head from '../components/head';

import Layout from '../components/layout';
import blogStyles from '../styles/blog.module.css';

import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
            contentful_id
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title='Blog' />
      <ul className={blogStyles.posts}>
        {
          data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.posts}
                key={edge.node.contentful_id}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </Layout>
  );
}

export default BlogPage;
