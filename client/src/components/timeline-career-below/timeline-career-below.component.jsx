import React from "react";
import { GiMechaMask, GiTribalMask } from "react-icons/gi";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  toggleYear2017Click,
  toggleYear2019Click,
} from "../../redux/about/about.actions";
import {
  selectIsYear2017Click,
  selectIsYear2019Click,
} from "../../redux/about/about.selectors";
import TimelineCareerLink from "../timeline-career-link/timeline-career-link.component";
import { BelowTimelineHeaderContainer } from "./timeline-career-below.styles";

export const TimelineCareerBelow = ({
  isYear2017Click,
  isYear2019Click,
  toggleYear2017Click,
  toggleYear2019Click,
}) => {
  return (
    <BelowTimelineHeaderContainer>
      <TimelineCareerLink
        isClick={isYear2017Click}
        yearClick={toggleYear2017Click}
        TimelineIcon={GiTribalMask}
        placement="below"
        year="2017"
      />
      <TimelineCareerLink
        isClick={isYear2019Click}
        yearClick={toggleYear2019Click}
        TimelineIcon={GiMechaMask}
        placement="below"
        year="2019"
      />
    </BelowTimelineHeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isYear2017Click: selectIsYear2017Click,
  isYear2019Click: selectIsYear2019Click,
});

const mapDispatchToProps = (dispatch) => ({
  toggleYear2017Click: () => dispatch(toggleYear2017Click()),
  toggleYear2019Click: () => dispatch(toggleYear2019Click()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineCareerBelow);
