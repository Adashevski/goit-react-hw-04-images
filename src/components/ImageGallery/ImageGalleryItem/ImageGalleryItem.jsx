import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!webformatURL || !largeImageURL || !alt) {
    return null;
  }

  return (
    <li className={styles['gallery-item']}>
      <img
        src={webformatURL}
        alt={alt}
        className={styles['gallery-item-image']}
        onClick={handleImageClick}
      />
      {showModal && (
        <Modal largeImageURL={largeImageURL} alt={alt} onClose={closeModal} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
