import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, isLoading, onLoadMore }) => {
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
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default ImageGallery;
