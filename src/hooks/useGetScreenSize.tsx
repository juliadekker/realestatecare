import React, { useState, useEffect } from "react";

const useGetScreenSize = () => {
  // Storing dimensions in a state, defaulted on iPhone X dimensions
  const [width, setWidth] = useState(375);
  const [height, setHeight] = useState(812);

  useEffect(() => {
    // Create a function to handle resizing
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    // Adding listener
    window.addEventListener("resize", handleResize);

    // Calling the first resize
    handleResize();

    // Removing listener on dismounting component
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [width, height];
};
