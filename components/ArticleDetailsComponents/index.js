import Layout from 'components/Shared/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import ArticleDetails from './ArticleDetails';

ArticleDetailsComponents.propTypes = {
  article: PropTypes.object,
};

ArticleDetailsComponents.defaultProps = {
  article: {},
};

export default function ArticleDetailsComponents({ article }) {
  return (
    <Layout>
      <ArticleDetails {...article} />
    </Layout>
  );
}
