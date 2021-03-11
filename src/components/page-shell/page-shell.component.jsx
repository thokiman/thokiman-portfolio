import React from "react";

import { CSSTransitionGroup } from "react-transition-group";

function PageShell(Page) {
  function PageTransition(props) {
    const {
      location: { pathname },
      aboutRoute,
      portfolioRoute,
      serviceRoute,
      contactRoute,
    } = props;
    return (
      <div className="page">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1200}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionName={
            !!pathname.match(RegExp(/^\/+/)) |
            !!pathname.match(RegExp(`^${aboutRoute}$`)) |
            !!pathname.match(RegExp(`^${portfolioRoute}$`)) |
            !!pathname.match(RegExp(`^${serviceRoute}$`)) |
            !!pathname.match(RegExp(`^${contactRoute}$`))
              ? "slide-in"
              : "slide-out"
          }
        >
          <Page {...props} />
        </CSSTransitionGroup>
      </div>
    );
  }
  return PageTransition;
}

export default PageShell;
