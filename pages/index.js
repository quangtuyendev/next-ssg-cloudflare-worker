import HomeComponents from 'components/HomeComponents';
import PropTypes from 'prop-types';

export async function getStaticProps() {
  const articles = await fetch(`${process.env.BASE_URL}/articles`).then(res =>
    res.json(),
  );
  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
}

HomeContainer.propTypes = {
  articles: PropTypes.array,
};

HomeContainer.defaultProps = {
  articles: [],
};

export default function HomeContainer({ articles }) {
  return <HomeComponents articles={articles} />;
}
