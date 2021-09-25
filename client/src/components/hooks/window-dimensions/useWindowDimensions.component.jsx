import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const {
    document: {
      documentElement: { clientHeight: height, clientWidth: width },
    },
  } = window;

  return {
    viewWidth: width,
    viewHeight: height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
