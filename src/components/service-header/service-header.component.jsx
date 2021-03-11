import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CSSTransitionGroup } from "react-transition-group";

import {
  selectArtService,
  selectEngineerService,
  selectFullstackService,
  selectPhotoService,
} from "../../redux/service/service.selectors";
import "./service-header.styles.scss";

const ServiceHeader = ({
  location: { pathname },
  art,
  photo,
  engineer,
  fullstack,
}) => {
  return (
    <div className="left-service-container">
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <div className="directory-service">
          <Link
            to={engineer.routeName}
            className={
              pathname.match(RegExp(`${engineer.routeName}$`))
                ? "directory-service-text-eng-active"
                : "directory-service-text-eng"
            }
          >
            engineer
          </Link>
          <Link
            to={fullstack.routeName}
            className={
              pathname.match(RegExp(`${fullstack.routeName}$`))
                ? "directory-service-text-fsd-active"
                : "directory-service-text-fsd"
            }
          >
            full
            <br />
            stack <br />
            developer
          </Link>
          <Link
            to={art.routeName}
            className={
              pathname.match(RegExp(`${art.routeName}$`))
                ? "directory-service-text-gd-active"
                : "directory-service-text-gd"
            }
          >
            graphic
            <br />
            design
          </Link>
          <Link
            to={photo.routeName}
            className={
              pathname.match(RegExp(`${photo.routeName}$`))
                ? "directory-service-text-pg-active"
                : "directory-service-text-pg"
            }
          >
            photo
            <br />
            graphy
          </Link>
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  art: selectArtService,
  photo: selectPhotoService,
  engineer: selectEngineerService,
  fullstack: selectFullstackService,
});

export default withRouter(connect(mapStateToProps)(ServiceHeader));
