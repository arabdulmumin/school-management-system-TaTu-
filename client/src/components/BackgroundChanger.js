import React, { useState, useEffect } from 'react';

const BackgroundChanger = () => {
  const images = [
    '../images 2/istockphoto-487561094-1024x1024.jpg',
    '../images 2/istockphoto-1257755000-1024x1024.jpg',
    '../images 2/istockphoto-1309665357-1024x1024.jpg',
    '../images 2/istockphoto-1309665368-1024x1024.jpg',
    '../images 2/istockphoto-1316871808-1024x1024.jpg',
    '../images 2/istockphoto-1332055233-1024x1024.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    ></div>
  );
};

export default BackgroundChanger;