import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { selectIsHeaderMorphingActive } from 'redux/header/header.selectors';
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
import PortfolioContentItem from '../portfolio-content-item/portfolio-content-item.component';
import { PortfolioLoadingState } from './portfolio-content.styles';

export const PortfolioContent = ({
  location: { pathname },
  items,
  collectionList,
  isLoading,
  fetchCollectionList,
  loadMoreCollectionList,
  loadCollectionListFinished,
  isHeaderMorphingActive,
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

  return (
    <>
      {isLoading || collectionList.length === 0 ? (
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
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingCollectionList,
  collectionList: selectCollectionList,
  isHeaderMorphingActive: selectIsHeaderMorphingActive,
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PortfolioContent)
);
