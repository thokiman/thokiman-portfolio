import React from "react";

import {
  HomepageThokimanBodyContainer,
  HomepageThokimanContainer,
  HomepageThokimanContentContainer,
  HomepageThokimanHeadContainer,
  HomepageThokimanHeadOutline,
  HomepageWhiteThokimanSkeleton,
} from "./homepage-thokiman-container.styles";

const HomePageThokimanContentContainer = () => {
  return (
    <HomepageThokimanContentContainer>
      <HomepageThokimanContainer>
        <HomepageThokimanHeadContainer>
          <HomepageThokimanHeadOutline />
        </HomepageThokimanHeadContainer>
        <HomepageThokimanBodyContainer>
          <HomepageWhiteThokimanSkeleton />
        </HomepageThokimanBodyContainer>
      </HomepageThokimanContainer>
    </HomepageThokimanContentContainer>
  );
};

export default HomePageThokimanContentContainer;
