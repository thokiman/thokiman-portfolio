import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { collections } from "../../data.object/collections.data";
import "./portfolio.styles.scss";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const {
    all: { items },
  } = collections;
  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = (countImages = 5) => {
    if (images.length >= items.length) {
      setHasMore(false);
      return null;
    }
    setImages([...images, ...items.slice(count, countImages)]);
    setIsLoaded(true);
    setCount(count + countImages);
  };
  return (
    <div className="collections-container">
      <div className="options">
        <Link to="/portfolio/branding" className="option">
          Branding
        </Link>
        <Link to="/portfolio/visual-art" className="option">
          Digital Art
        </Link>
        <Link to="/portfolio/photography" className="option">
          Photography
        </Link>
      </div>

      <InfiniteScroll
        dataLength={images}
        next={() => fetchImages(5)}
        hasMore={hasMore}
      >
        <div className="image-collections-container">
          {loaded
            ? items.map((item) => {
                return (
                  <div key={item.id} className="image-collection">
                    <img
                      className="image-item"
                      src={item.iconPath}
                      alt={item.field}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Portfolio;
