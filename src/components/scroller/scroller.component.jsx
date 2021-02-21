import React, { useEffect, useRef } from "react";

import useWindowSize from "./useWindowSize.component";
import "./scroller.styles.scss";

export default function SmoothScroller({ children, adjustmentParams }) {
  //hook to grab window size
  const size = useWindowSize();
  //ref for parent div and scrolling div
  const parentElement = useRef();
  const scrollContainer = useRef();

  //configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  //run scroll render once page is loaded
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling(), []);
  });

  //set the height of the body
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };
  //scrolling
  const skewScrolling = () => {
    //set current to the scroll position amount
    data.current = window.scrollY;

    //set previous to the scroll previous position
    data.previous += data.current - data.previous * data.ease;
    //set rounded to
    data.rounded = (data.previous * 9.99999) / 100;
    //assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    //loop value ref
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div className="parent-element" ref={parentElement}>
      <div className="scroll-container" ref={scrollContainer}>
        {children}
      </div>
    </div>
  );
}
