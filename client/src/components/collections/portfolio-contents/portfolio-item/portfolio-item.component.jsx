import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import {
  PortfolioImageCollection,
  PortfolioImageCollectionsContainer,
  PortfolioImageItem,
} from './portfolio-item.styles';

export const PortfolioItem = ({ items, isSideBarActive }) => {
  return (
    <PortfolioImageCollectionsContainer $issidebaractive={isSideBarActive}>
      {items.map((item) => {
        return (
          <PortfolioImageCollection key={item.id}>
            <PortfolioImageItem src={item.iconPath} alt={item.field} />
          </PortfolioImageCollection>
        );
      })}
    </PortfolioImageCollectionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
});

export default connect(mapStateToProps)(memo(PortfolioItem));
