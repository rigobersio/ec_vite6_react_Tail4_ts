import React from 'react';
//import NavBar from './components/NavBar';
import NavBar from './components/nav/NavBar';
import Footer from './components/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen w-[100%] '>
      <NavBar />
      <main className="flex-grow pt-[var(--nav-height)] mt-[20px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;