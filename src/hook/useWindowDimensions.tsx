import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    function handleResize() {
      const { width } = getWindowDimensions();

      // Define breakpoints based on Tailwind CSS
      const breakpoints = {
        sm: 640, // Small screens
        md: 768, // Medium screens
        lg: 1024, // Large screens
        xl: 1280, // Extra large screens
      };

      if (width < breakpoints.sm) {
        setScreenSize('xs');
      } else if (width < breakpoints.md) {
        setScreenSize('sm');
      } else if (width < breakpoints.lg) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }

      setWindowDimensions({ width, height: windowDimensions.height });
    }

    // Call handleResize once when the component mounts
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions.height]); // screenSize is removed from the dependency array

  return { ...windowDimensions, screenSize };
}
