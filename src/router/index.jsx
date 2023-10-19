import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Calculator, GameContainer, Carousel, MemoryGame } from '../pages';
import { Navbar } from '../components/Navbar';


const index = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/game" element={<GameContainer />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default index;
