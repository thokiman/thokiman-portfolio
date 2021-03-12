import React, { useEffect, useState } from "react";
import Rings from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import {
  loadCollectionList,
  loadMoreCollection,
  loadCollectionListFinished,
} from "../../redux/collection/collection.actions";
import {
  selectCollectionList,
  selectIsLoadingCollectionList,
} from "../../redux/collection/collection.selectors";

import PorfolioItem from "../portfolio-item/portfolio-item.component";
import "./portfolio-container.styles.scss";

const PortfolioContainer = ({
  items,
  collectionList,
  isLoading,
  fetchCollectionList,
  loadMoreCollectionList,
  loadCollectionListFinished,
}) => {
  const initialPageNumber = 1;
  const nextPageNumber = 2;
  const pageSize = 10;

  const [countPage, setCountPage] = useState(nextPageNumber);
  useEffect(() => {
    fetchCollectionList(items, initialPageNumber, pageSize);
  }, []);

  const handleScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      loadMoreCollectionList(items, countPage, pageSize);
      setCountPage(countPage + 1);
    }
    loadCollectionListFinished();
  };
  return (
    <CSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={960}
      transitionEnterTimeout={800}
      transitionLeaveTimeout={200}
      transitionName={"slide-out"}
    >
      {isLoading && collectionList.length === 0 ? (
        <div className="loading-state">
          <Rings
            type="Puff"
            color="#e3e1e4"
            height={100}
            width={100}
            visible={isLoading}
          />
        </div>
      ) : (
        <div onScroll={handleScroll} className="portfolio-container">
          <PorfolioItem items={collectionList} />
          {isLoading && (
            <div className="loading-state">
              <Rings
                type="Puff"
                color="#e3e1e4"
                height={100}
                width={100}
                visible={isLoading}
              />
            </div>
          )}
        </div>
      )}
    </CSSTransitionGroup>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingCollectionList,
  collectionList: selectCollectionList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCollectionList: loadCollectionList,
      loadMoreCollectionList: loadMoreCollection,
      loadCollectionListFinished: loadCollectionListFinished,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer);
