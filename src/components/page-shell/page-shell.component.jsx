import React from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function PageShell(Page) {
  function PageTransition(props) {
    const {
      location: { pathname },
    } = props;
    return (
      <div className="page">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1200}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionName={
            pathname.match(RegExp(/^\/+/)) |
            pathname.match(RegExp(/^\/about+/)) |
            pathname.match(RegExp(/^\/portfolio+/)) |
            pathname.match(RegExp(/^\/service+/)) |
            pathname.match(RegExp(/^\/contact+/))
              ? "slide-in"
              : "slide-out"
          }
        >
          <Page {...props} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
  return PageTransition;
}

export default PageShell;
