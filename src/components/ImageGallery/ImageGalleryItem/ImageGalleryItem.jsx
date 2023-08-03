import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleImageClick = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { webformatURL, largeImageURL, alt } = this.props;
    const { showModal } = this.state;

    if (!webformatURL || !largeImageURL || !alt) {
      return null;
    }

    return (
      <li className={styles['gallery-item']}>
        <img
          src={webformatURL}
          alt={alt}
          className={styles['gallery-item-image']}
          onClick={this.handleImageClick}
        />
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onClose={this.closeModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
