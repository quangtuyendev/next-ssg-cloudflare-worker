import ArticleItem from 'components/Common/ArticleItem';
import ArticleList from 'components/Common/ArticleList';
import Layout from 'components/Shared/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import ArticleWrapper from './ArticleWrapper';

HomeComponents.propTypes = {
  articles: PropTypes.array,
};

HomeComponents.defaultProps = {
  articles: [],
};

export default function HomeComponents({ articles }) {
  function renderArticles() {
    return articles?.map(item => <ArticleItem key={item.id} {...item} />);
  }

  return (
    <Layout>
      <ArticleWrapper>
        <ArticleList>{renderArticles()}</ArticleList>
      </ArticleWrapper>
    </Layout>
  );
}
