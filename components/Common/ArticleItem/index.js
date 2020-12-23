import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { css } from '@emotion/react';

import PropTypes from 'prop-types';
ArticleItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default function ArticleItem({ id, date, title, body, image }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <Link
          href="/articles/[slug]/[id]"
          as={`/articles/${title
            .replace(/[^\w\s]/gi, '')
            .toLowerCase()
            .split(' ')
            .join('-')}/${id}`}
        >
          <a>
            <img
              title={title}
              className="card-img-top"
              src={image}
              alt={title}
            />
          </a>
        </Link>
        <div className="card-body">
          <Link
            href="/articles/[slug]/[id]"
            as={`/articles/${title
              .replace(/[^\w\s]/gi, '')
              .toLowerCase()
              .split(' ')
              .join('-')}/${id}`}
          >
            <a title={title}>
              <h5
                css={css`
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
                className="card-title"
              >
                {title}
              </h5>
            </a>
          </Link>
          <p
            css={css`
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
            className="card-text"
          >
            {body}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <Link
              href="/articles/[slug]/[id]"
              as={`/articles/${title
                .replace(/[^\w\s]/gi, '')
                .toLowerCase()
                .split(' ')
                .join('-')}/${id}`}
            >
              <a className="btn btn-primary">View details</a>
            </Link>
            <small className="text-muted">{moment(date).fromNow()}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
