import gsap from 'gsap';
import React, { memo, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  selectAllPortfolioRoute,
  selectBrandRoute,
  selectDefaultPortfolioRoute,
  selectDigitalArtRoute,
  selectPhotographyBwRoute,
  selectPhotographyColorRoute,
} from 'redux/collection/collection.selectors';
import { createStructuredSelector } from 'reselect';
import { selectIsSideBarActive } from '../../../../redux/header/header.selectors';
import { measurePortfolioItemStyles } from './portfolio-item.utils.styles';
import ImageGsap from './portfolio-item.utils.transition';
import {
  PortfolioImageCollection,
  PortfolioImageCollectionsContainer,
  PortfolioImageItem,
} from './portfolio-items.styles';

export const PortfolioItem = ({
  items,
  location: { pathname },
  isSideBarActive,
  portfolioDefaultRoute,
  portfolioAllRoute,
  brandRoute,
  digitalArtRoute,
  photographyBwRoute,
  photographyColorRoute,
}) => {
  const [timeline, setTimeline] = useState(() => gsap.timeline());
  const addAnimation = useCallback(
    (animation, index) => {
      timeline.add(animation, index * 0.4);
    },
    [timeline]
  );

  // const captionImage = (item) => {
  //   const modifiedTextField = item.field.replace(/_[\w|-]+/, '');
  //   const fixedCaption = modifiedTextField.replace(/-/, ' ');
  //   const capitalCaption =
  //     fixedCaption.charAt(0).toUppercase() + fixedCaption.slice(1);
  //   console.log('modifiedTextField', modifiedTextField);
  //   console.log('fixedCaption', fixedCaption);
  //   console.log('capitalCaption', capitalCaption);
  // };

  return (
    <PortfolioImageCollectionsContainer
      $issidebaractive={isSideBarActive}
      $matchpath={measurePortfolioItemStyles(
        pathname,
        portfolioDefaultRoute,
        portfolioAllRoute,
        brandRoute,
        digitalArtRoute,
        photographyBwRoute,
        photographyColorRoute
      )}
    >
      {items.map((item, index) => {
        
        return (
          <PortfolioImageCollection
            key={item.id}
            $matchpath={measurePortfolioItemStyles(
              pathname,
              portfolioDefaultRoute,
              portfolioAllRoute,
              brandRoute,
              digitalArtRoute,
              photographyBwRoute,
              photographyColorRoute
            )}
          >
            <ImageGsap
              addAnimation={addAnimation}
              index={index}
              pathname={pathname}
              portfolioDefaultRoute={portfolioDefaultRoute}
              portfolioOptionsRoute={{
                portfolioAllRoute,
                brandRoute,
                digitalArtRoute,
                photographyBwRoute,
                photographyColorRoute,
              }}
            >
              <PortfolioImageItem
                $matchpath={measurePortfolioItemStyles(
                  pathname,
                  portfolioDefaultRoute,
                  portfolioAllRoute,
                  brandRoute,
                  digitalArtRoute,
                  photographyBwRoute,
                  photographyColorRoute
                )}
                src={item.iconPath}
                alt={item.field}
              />
            </ImageGsap>
          </PortfolioImageCollection>
        );
      })}
    </PortfolioImageCollectionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
  portfolioDefaultRoute: selectDefaultPortfolioRoute,
  portfolioAllRoute: selectAllPortfolioRoute,
  brandRoute: selectBrandRoute,
  digitalArtRoute: selectDigitalArtRoute,
  photographyBwRoute: selectPhotographyBwRoute,
  photographyColorRoute: selectPhotographyColorRoute,
});

export default connect(mapStateToProps)(withRouter(memo(PortfolioItem)));
