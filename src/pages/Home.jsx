import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Footer from '../components/common/Footer';
import Carousel from '../components/common/Carousel';
import ProductCard from '../components/common/ProductCard';
import { TextInput } from 'flowbite-react';
import ChatInterface from "../components/ChatInterface";

function Home() {
  return (
    <>
    <div className='min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center space-y-12 dark:bg-gray-900'>
        {/* ------------------ */}
        {/* Top Section: Search Bar */}
        {/* ------------------ */}
        <header className='w-full max-w-4xl'>
          <TextInput
            id='search'
            type='text'
            placeholder='Search...'
            shadow
            autoComplete='off'
          />
        </header>

        {/* Right: Chat Interface */}
        <div className='w-full max-w-4xl'>
          <ChatInterface />
        </div>

        {/* ------------------ */}
        {/* Row 2, Cols 1-2: Product Grid */}
        {/* ------------------ */}
        {/* <section className='mt-6 col-span-2 grid grid-cols-2 gap-6'>
          <ProductCard>Product 1</ProductCard>
          <ProductCard>Product 2</ProductCard>
          <ProductCard>Product 3</ProductCard>
          <ProductCard>Product 4</ProductCard>
        </section> */}

        {/* ------------------ */}
        {/* Bottom Section: Carousel */}
        {/* ------------------ */}
        <section className='w-full max-w-4xl'>
          <Carousel />
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
