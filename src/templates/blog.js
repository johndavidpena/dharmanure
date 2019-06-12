import React from 'react';
import blogStyles from '../styles/blog.module.css';
import Head from '../components/head';
import Layout from '../components/layout';

import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      // NOTE: This code is for an image saved ON contentful, not image links
      // FOr now, going to upload the images to contentful
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <div className={blogStyles.post}>
        <h2>{props.data.contentfulBlogPost.title}</h2>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </div>
    </Layout>
  );
}

export default Blog;
