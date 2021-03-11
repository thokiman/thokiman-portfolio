import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Rings from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import PorfolioItem from "../portfolio-item/portfolio-item.component";
import "./portfolio-container.styles.scss";

const PortfolioContainer = ({ items }) => {
  const [collectedImages, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (countImages = 10) => {
    if (collectedImages.length === items.length) {
      setHasMore(false);
      return null;
    }
    setImages([...collectedImages, ...items.slice(count, count + countImages)]);
    setCount(count + countImages);
  };

  return (
    <InfiniteScroll
      dataLength={collectedImages}
      next={() => fetchImages()}
      hasMore={hasMore}
      loader={
        <div className="loading-state">
          <Rings
            type="Puff"
            color="#e3e1e4"
            height={100}
            width={100}
            visible={hasMore}
          />
        </div>
      }
    >
      <PorfolioItem items={collectedImages} />
    </InfiniteScroll>
  );
};

export default PortfolioContainer;
