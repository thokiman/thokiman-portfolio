import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../../../redux/header/header.selectors";
import {
  PortfolioImageCollection,
  PortfolioImageCollectionsContainer,
  PortfolioImageItem
} from "./portfolio-item.styles";


export const PortfolioItem = ({ items, isSideBarHidden }) => {
  return (
    <PortfolioImageCollectionsContainer $issidebarhidden={isSideBarHidden}>
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
  isSideBarHidden: selectIsSideBarHidden,
});

export default connect(mapStateToProps)(memo(PortfolioItem));
