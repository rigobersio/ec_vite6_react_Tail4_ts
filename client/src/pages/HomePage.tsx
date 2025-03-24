import React from 'react';
import Header from '../components/Header'
import GalleryPage from './GalleryPage';
import Cloudinary2 from '../components/Cloudinary2';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <GalleryPage />
      <Cloudinary2 />
      <h2 className="text-center mt-8 text-xl font-bold">Soy el resto de <strong>Home</strong></h2>
    </div>
  );
};

export default HomePage;
