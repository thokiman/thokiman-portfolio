import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import { createStructuredSelector } from "reselect";
import { selectIsSideBarHidden } from "../../../redux/header/header.selectors";
import {
  selectArtService, selectDevService, selectEngineerService, selectPhotoService
} from "../../../redux/service/service.selectors";
import {
  DirectoryService,
  DirectoryServiceTextEng,
  DirectoryServiceTextFsd,
  DirectoryServiceTextGd,
  DirectoryServiceTextPg, LeftServiceContainer
} from "./service-header.styles";


export const ServiceHeader = ({
  location: { pathname },
  art,
  photo,
  engineer,
  dev,
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
            $matchpath={!!pathname.match(RegExp(`${ engineer.routeName }$`))}
          >
            chemical
            <br />
            engineer
          </DirectoryServiceTextEng>
          <DirectoryServiceTextFsd
            to={dev.routeName}
            $matchpath={!!pathname.match(RegExp(`${ dev.routeName }$`))}
          >
            full
            <br />
            stack
            <br />
            developer
          </DirectoryServiceTextFsd>
          <DirectoryServiceTextGd
            to={art.routeName}
            $matchpath={!!pathname.match(RegExp(`${ art.routeName }$`))}
          >
            graphic
            <br />
            designer
          </DirectoryServiceTextGd>
          <DirectoryServiceTextPg
            to={photo.routeName}
            $matchpath={!!pathname.match(RegExp(`${ photo.routeName }$`))}
          >
            photo
            <br />
            grapher
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
  dev: selectDevService,
  isSideBarHidden: selectIsSideBarHidden,
});

export default withRouter(connect(mapStateToProps)(ServiceHeader));
