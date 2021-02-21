import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function PageShell(Page) {
  function PageTransition({ match, ...otherProps }) {
    return (
      <div className="page">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={match.path === "/" ? "slide-in" : "slide-out"}
        >
          <Page {...otherProps} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
  return PageTransition;
}

export default PageShell;
