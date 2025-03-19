import React, { useState, useEffect } from 'react';
import { Coordinators1, Coordinators2, Coordinators3 } from './CoordinatorsDetails';
import '../../index.css';

const CoordinatorsSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className="slider relative overflow-hidden border mb-8">
      <div className="slide-track flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 250}px)` }}>
        {items.map((content, index) => (
          <div key={index} className="slide w-50">
            <div className="flex flex-col items-center">
              <img src={content.image} alt={content.name} className="w-[50px] mb-2" />
              <h1 className="text-xs">{content.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Coordinators = () => {
  return (
    <div className='flex flex-col items-center'>
      <CoordinatorsSlider items={Coordinators1} />
      <CoordinatorsSlider items={Coordinators2} />
      <CoordinatorsSlider items={Coordinators3} />
    </div>
  );
};

export default Coordinators;
