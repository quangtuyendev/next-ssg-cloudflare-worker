import PropTypes from 'prop-types';
import React from 'react';

ArticleWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default function ArticleWrapper({ children }) {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
}
