import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  loadCollectionList,
  loadCollectionListFinished,
  loadMoreCollection,
} from '../../../../redux/collection/collection.actions';
import {
  selectCollectionList,
  selectIsLoadingCollectionList,
} from '../../../../redux/collection/collection.selectors';
import PortfolioItem from '../../portfolio-commons/portfolio-items/portfolio-items.component';
import PortfolioContentItem from '../portfolio-content-item/portfolio-content-item.component';
import { PortfolioLoadingState } from './portfolio-content.styles';

export const PortfolioContent = ({
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

  const handleScroll = () => {
    loadMoreCollectionList(items, countPage, pageSize);
    setCountPage(countPage + 1);
    loadCollectionListFinished();
  };
  if (window.screen.width < 800)
    return (
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={960}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={'slide-out'}
      >
        <PortfolioItem items={items} />
      </CSSTransitionGroup>
    );
  return (
    <CSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={960}
      transitionEnterTimeout={800}
      transitionLeaveTimeout={200}
      transitionName={'slide-out'}
    >
      {isLoading && collectionList.length === 0 ? (
        <PortfolioLoadingState
          type='Puff'
          color='#e3e1e4'
          height={100}
          width={100}
          visible={isLoading}
        />
      ) : (
        <PortfolioContentItem
          collectionList={collectionList}
          handleScroll={handleScroll}
          isLoading={isLoading}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContent);
