import PropTypes from 'prop-types';
import React from 'react';
import Jumbotron from '../Jumbotron';

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default function Layout({ children }) {
  return (
    <main>
      <Jumbotron />
      {children}
    </main>
  );
}
