import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSectionAdmin from '../HeroSectionAdmin';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSectionAdmin />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;