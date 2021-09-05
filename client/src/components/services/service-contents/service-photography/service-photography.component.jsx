import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { createStructuredSelector } from "reselect";
import { selectPhotoService } from "../../../../redux/service/service.selectors";
import ServiceIconContent from "../../service-commons/service-icon-content/service-icon-content.component";
import ServiceUrlGeneralContent from "../../service-commons/service-url-general-content/service-url-general-content.component";
import ServiceUrlIconContent from "../../service-commons/service-url-icon-content/service-url-icon-content.component";
import {
  RightServiceContainerPg,
  RightServiceContentPg
} from "./service-photography.styles";


export const ServicePhotography = ({
  photo: { title, description, photoStockItems, photographyIconItems },
}) => {
  return (
    <RightServiceContainerPg>
      <CSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={800}
        transitionEnterTimeout={800}
        transitionLeaveTimeout={200}
        transitionName={"slide-out"}
      >
        <RightServiceContentPg>
          <ServiceUrlGeneralContent title={title} description={description} />
          <ServiceIconContent items={photographyIconItems} />
          <ServiceUrlIconContent items={photoStockItems} />
        </RightServiceContentPg>
      </CSSTransitionGroup>
    </RightServiceContainerPg>
  );
};
const mapStateToProps = createStructuredSelector({
  photo: selectPhotoService,
});
export default connect(mapStateToProps)(ServicePhotography);
