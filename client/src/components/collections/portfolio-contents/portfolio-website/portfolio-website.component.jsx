import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { setCurrentWebsitePahtname } from 'redux/collection/collection.actions';
import {
  selectCrownWebsiteRoute,
  selectCrownWebsiteTitle,
  selectCurrentWebsitePathname,
  selectThokimanWebsiteRoute,
  selectThokimanWebsiteTitle,
  selectWebsiteRoute,
  selectYelpcampWebsiteRoute,
  selectYelpcampWebsiteTitle,
} from 'redux/collection/collection.selectors';
import { selectIsSideBarActive } from 'redux/header/header.selectors';
import { createStructuredSelector } from 'reselect';
import PortfolioWebsiteHeader from '../../portfolio-website-header/portfolio-website-header.component';
import PortfolioWebsiteItem from '../portfolio-website-item/portfolio-website-item.component';
import { PortfolioWebsitesContainer } from './portfolio-website.styles';

export const PortfolioWebsite = ({
  location: { pathname },
  websiteItems: { crown, thokiman, yelpcamp },
  isSideBarActive,
  websiteRoute,
  currentWebsitePathname,
  setPathname,
}) => {
  const selectCurrentPathname = (prevPath) => {
    let defaultItem;
    switch (prevPath) {
      case thokiman.routeName:
        defaultItem = thokiman;
        break;
      case yelpcamp.routeName:
        defaultItem = yelpcamp;
        break;
      case crown.routeName:
        defaultItem = crown;
        break;
      default:
        defaultItem = thokiman;
        break;
    }

    return defaultItem;
  };
  useEffect(() => {
    setPathname(pathname);
  }, [pathname]);
  return (
    <PortfolioWebsitesContainer>
      <PortfolioWebsiteHeader />
      <Switch>
        <Route
          exact
          path={websiteRoute}
          render={() => (
            <PortfolioWebsiteItem
              items={selectCurrentPathname(currentWebsitePathname)}
              isSideBarActive={isSideBarActive}
            />
          )}
        />
        <Route
          path={thokiman.routeName}
          render={() => (
            <PortfolioWebsiteItem
              items={thokiman}
              isSideBarActive={isSideBarActive}
            />
          )}
        />
        <Route
          path={crown.routeName}
          render={() => (
            <PortfolioWebsiteItem
              items={crown}
              isSideBarActive={isSideBarActive}
            />
          )}
        />
        <Route
          path={yelpcamp.routeName}
          render={() => (
            <PortfolioWebsiteItem
              items={yelpcamp}
              isSideBarActive={isSideBarActive}
            />
          )}
        />
      </Switch>
    </PortfolioWebsitesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSideBarActive: selectIsSideBarActive,
  websiteRoute: selectWebsiteRoute,
  thokimanWebsiteTitle: selectThokimanWebsiteTitle,
  thokimanWebsiteRoute: selectThokimanWebsiteRoute,
  crownWebsiteTitle: selectCrownWebsiteTitle,
  crownWebsiteRoute: selectCrownWebsiteRoute,
  yelpcampWebsiteTitle: selectYelpcampWebsiteTitle,
  yelpcampWebsiteRoute: selectYelpcampWebsiteRoute,
  currentWebsitePathname: selectCurrentWebsitePathname,
});
const mapDispatchToProps = (dispatch) => ({
  setPathname: (currPath) => dispatch(setCurrentWebsitePahtname(currPath)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PortfolioWebsite)
);
