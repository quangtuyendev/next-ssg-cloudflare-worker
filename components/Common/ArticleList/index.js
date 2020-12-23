import PropTypes from 'prop-types';

ArticleList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default function ArticleList({ children }) {
  return children;
}
