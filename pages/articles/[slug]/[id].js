import ArticleDetailsComponents from 'components/ArticleDetailsComponents';
import PropTypes from 'prop-types';
import React from 'react';

export async function getStaticProps({ params }) {
  const { id } = params;
  const article = await fetch(
    `${process.env.BASE_URL}/articles/${id}`,
  ).then(res => res.json());
  return {
    props: {
      article,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const articles = await fetch(`${process.env.BASE_URL}/articles`).then(res =>
    res.json(),
  );

  return {
    paths: articles.map(({ id, title }) => ({
      params: {
        slug: title
          .replace(/[^\w\s]/gi, '')
          .toLowerCase()
          .split(' ')
          .join('-'),
        id,
      },
    })),
    fallback: false,
  };
}

ArticleDetailsContainer.propTypes = {
  article: PropTypes.object,
};

ArticleDetailsContainer.defaultProps = {
  articles: {},
};

export default function ArticleDetailsContainer({ article }) {
  return <ArticleDetailsComponents article={article} />;
}
