import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ largeImageURL, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = ev => {
      if (ev.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = ev => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
