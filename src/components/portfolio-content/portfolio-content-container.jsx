import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsLoadingCollectionList } from "../../redux/collection/collection.selectors";
import WithSpinnerLoading from "../with-spinner-loading/with-spinner-loading.component";
import PortfolioContent from "../portfolio-content/portfolio-content.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingCollectionList,
});

const PortfolioContentContainer = compose(
  connect(mapStateToProps),
  WithSpinnerLoading
)(PortfolioContent);

export default PortfolioContentContainer;
