"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TopBar = () => {
  const slogans = [
    'Southern #1 for Fabrications !',
    'Quality You Can Trust !',
    'Your Neighbourhood Engineer !',
    // 'Innovation in Every Design',
    // 'Building Dreams, Crafting Reality',
    'Where Quality Meets Excellence !'
  ];

  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000); // Change slogan every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
  };

  const handlePrevious = () => {
    setCurrentSloganIndex((prevIndex) => (prevIndex - 1 + slogans.length) % slogans.length);
  };

  return (
    <div
      style={{
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#592d2e',
        fontWeight: 'bold',
        fontSize: '20px',
        fontStyle: 'italic',
        fontFamily: 'Arial, sans-serif',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: 10

      }}
    >
      <button
        onClick={handlePrevious}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          marginRight: '15px',
        }}
      >
        <FaChevronLeft />
      </button>
      <p
        style={{
          color: 'white',
          fontSize: '20px',
          fontStyle: 'italic',
          fontWeight: 700,
          lineHeight: 'normal',
          textTransform: 'capitalize',
          fontFamily: '"Noto Sans", sans-serif',
          transition: 'opacity 0.5s ease-in-out',
          animation: 'fadeIn 1s',
        }}
      >
        {slogans[currentSloganIndex]}
      </p>
      <button
        onClick={handleNext}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          marginLeft: '15px',
        }}
      >
        <FaChevronRight />
      </button>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default TopBar;