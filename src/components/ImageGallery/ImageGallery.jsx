import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images, isLoading, onLoadMore } = this.props;

    return (
      <div>
        <ul className={styles.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              alt={image.tags}
            />
          ))}
        </ul>
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onLoadMore={onLoadMore} />}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
