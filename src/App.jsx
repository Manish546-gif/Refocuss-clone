import React from 'react';
import Navbar from './component/navbar';
import Work from './component/Work';
import Stripes from './component/Stripes';
import Products from './component/PRoducts';
import Marquees from './component/marquees';
import Cards from './component/Cards';
import Footer from './component/Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App(){
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' font-["satoshi"]  text-white w-full bg-zinc-800'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
      </div>
  )
}

export default App;