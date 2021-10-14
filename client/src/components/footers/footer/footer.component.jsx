import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectAboutRoute,
  selectTimelineCareerRoute,
} from '../../../redux/about/about.selectors';
import { selectDefaultPortfolioRoute } from '../../../redux/collection/collection.selectors';
import { selectContactRoute } from '../../../redux/contact/contact.selectors';
import FooterContact from '../footer-contact/footer-contact.component';
import FooterGeneral from '../footer-general/footer-general.component';

export const Footer = ({
  location: { pathname },
  contactRoute,
  portfolioDefaultRoute,
}) => {
  if (pathname.match(`^${contactRoute}+`)) {
    return <FooterContact />;
  } else {
    return <FooterGeneral />;
  }
};

const mapStateToProps = createStructuredSelector({
  contactRoute: selectContactRoute,
  portfolioDefaultRoute: selectDefaultPortfolioRoute,
  aboutRoute: selectAboutRoute,
  timelineRoute: selectTimelineCareerRoute,
});
export default withRouter(connect(mapStateToProps)(Footer));
