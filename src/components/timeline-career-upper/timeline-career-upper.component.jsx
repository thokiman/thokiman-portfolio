import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { GiCeremonialMask, GiTotemMask, GiGasMask } from "react-icons/gi";

import {
  selectIsYear2016Click,
  selectIsYear2018Click,
  selectIsYearCurrentClick,
} from "../../redux/about/about.selectors";
import TimelineCareerLink from "../timeline-career-link/timeline-career-link.component";
import "./timeline-career-upper.styles.scss";
import {
  toggleYear2016Click,
  toggleYear2018Click,
  toggleYearCurrentClick,
} from "../../redux/about/about.actions";

const TimelineCareerUpper = ({
  isYear2016Click,
  isYear2018Click,
  isYearCurrentClick,
  toggleYear2016Click,
  toggleYear2018Click,
  toggleYearCurrentClick,
}) => {
  return (
    <div className="upper-timeline-header-container">
      <TimelineCareerLink
        isClick={isYear2016Click}
        yearClick={toggleYear2016Click}
        TimelineIcon={GiCeremonialMask}
        placement="upper"
        year="2016"
      />
      <TimelineCareerLink
        isClick={isYear2018Click}
        yearClick={toggleYear2018Click}
        TimelineIcon={GiTotemMask}
        placement="upper"
        year="2018"
      />
      <TimelineCareerLink
        isClick={isYearCurrentClick}
        yearClick={toggleYearCurrentClick}
        placement="upper"
        TimelineIcon={GiGasMask}
        year="Today"
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isYear2016Click: selectIsYear2016Click,
  isYear2018Click: selectIsYear2018Click,
  isYearCurrentClick: selectIsYearCurrentClick,
});

const mapDispatchToProps = (dispatch) => ({
  toggleYear2016Click: () => dispatch(toggleYear2016Click()),
  toggleYear2018Click: () => dispatch(toggleYear2018Click()),
  toggleYearCurrentClick: () => dispatch(toggleYearCurrentClick()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineCareerUpper);
