import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

ArticleDetails.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default function ArticleDetails({ title, body, image }) {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <img
            css={css`
              width: 100%;
            `}
            title={title}
            className="img-fluid rounded mb-4 mb-lg-0"
            src={image}
            alt={title}
          />
        </div>
        <div className="col-lg-5">
          <h1 title={title} className="font-weight-light">
            {title}
          </h1>
          <p>{body}</p>
          <a className="btn btn-primary" href="/">
            Call to Action!
          </a>
        </div>
      </div>
    </div>
  );
}
