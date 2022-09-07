import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
  title: '',
  backgroundUrl: '',
};

function Banner(props) {
  const { title, backgroundUrl } = props;

  const styles = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={styles}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

export default Banner;
