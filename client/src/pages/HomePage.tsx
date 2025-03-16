import React from 'react';
import Header from '../components/Header'
import GalleryPage from './GalleryPage';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <GalleryPage />
      <h2>Soy el resto de <strong>Home</strong></h2>
    </div>
  );
};

export default HomePage;
