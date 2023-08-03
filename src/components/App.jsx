import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import '../index.css';

const API_KEY = '36382362-abb3b9976eb1436b438e40306';
export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const fetchImages = async () => {
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    setIsLoading(true);

    try {
      const response = await axios.get(url);
      const data = response.data.hits;
      setImages(prevImages => [...prevImages, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.log('Error:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isPageLoaded) {
      fetchImages();
    } else {
      setIsPageLoaded(true);
    }
  }, [searchQuery, page]);

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery
        images={images}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};
//test
