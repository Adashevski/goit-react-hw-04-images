import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import '../index.css';

const API_KEY = '36382362-abb3b9976eb1436b438e40306';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    page: 1,
  };

  handleSearchSubmit = query => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(url);
      const data = response.data.hits;
      this.setState(prevState => ({
        images: [...prevState.images, ...data],
        isLoading: false,
      }));
    } catch (error) {
      console.log('Error:', error);
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          images={images}
          isLoading={isLoading}
          onLoadMore={this.handleLoadMore}
        />
      </div>
    );
  }
}
