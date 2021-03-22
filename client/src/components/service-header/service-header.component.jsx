import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";

import {
  selectArtService,
  selectEngineerService,
  selectFullstackService,
  selectPhotoService,
} from "../../redux/service/service.selectors";
import {
  LeftServiceContainer,
  DirectoryService,
  DirectoryServiceTextEng,
  DirectoryServiceTextFsd,
  DirectoryServiceTextGd,
  DirectoryServiceTextPg,
} from "./service-header.styles";
import { selectIsSideBarHidden } from "../../redux/header/header.selectors";

const ServiceHeader = ({
  location: { pathname },
  art,
  photo,
  engineer,
  fullstack,
  isSideBarHidden,
}) => {
  return (
    <LeftServiceContainer $issidebarhidden={isSideBarHidden}>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <DirectoryService>
          <DirectoryServiceTextEng
            to={engineer.routeName}
            $matchpath={!!pathname.match(RegExp(`${engineer.routeName}$`))}
          >
            engineer
          </DirectoryServiceTextEng>
          <DirectoryServiceTextFsd
            to={fullstack.routeName}
            $matchpath={!!pathname.match(RegExp(`${fullstack.routeName}$`))}
          >
            full
            <br />
            stack <br />
            developer
          </DirectoryServiceTextFsd>
          <DirectoryServiceTextGd
            to={art.routeName}
            $matchpath={!!pathname.match(RegExp(`${art.routeName}$`))}
          >
            graphic
            <br />
            design
          </DirectoryServiceTextGd>
          <DirectoryServiceTextPg
            to={photo.routeName}
            $matchpath={!!pathname.match(RegExp(`${photo.routeName}$`))}
          >
            photo
            <br />
            graphy
          </DirectoryServiceTextPg>
        </DirectoryService>
      </CSSTransitionGroup>
    </LeftServiceContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  photo: selectPhotoService,
  engineer: selectEngineerService,
  fullstack: selectFullstackService,
  isSideBarHidden: selectIsSideBarHidden,
});

export default withRouter(connect(mapStateToProps)(ServiceHeader));
