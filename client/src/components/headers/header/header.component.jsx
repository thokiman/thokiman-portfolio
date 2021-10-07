import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectHomepageRoute } from 'redux/homepage/homepage.selectors';
import { createStructuredSelector } from 'reselect';
import { selectAboutRoute } from '../../../redux/about/about.selectors';
import { selectPortfolioRoute } from '../../../redux/collection/collection.selectors';
import { selectContactRoute } from '../../../redux/contact/contact.selectors';
import { selectIsSideBarActive } from '../../../redux/header/header.selectors';
import { selectServiceRoute } from '../../../redux/service/service.selectors';
import SideBarIcon from '../sidebar-icon/sidebar-icon.component';
import {
  HeaderContainer,
  HeaderIntro,
  HeaderLink,
  HeaderMorphing,
  HeaderPILogo,
  HeaderPILogoContainer,
  HeaderTextContainer,
  TitleHeaderIntro,
  WavyBottomSVG,
} from './header.styles';
import {
  measureBottomWavy,
  measureHeaderMorphing,
  measureTitleHeaderIntro,
  measureWavyIntro,
  selectTitleHeaderIntro,
} from './header.utils.styles';
export const Header = ({
  location: { pathname },
  aboutRoute,
  portfolioRoute,
  serviceRoute,
  contactRoute,
  homepageRoute,
  isSideBarActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();
  const [hasTransitionMorphing, setTransitionMorphing] = useState(true);
  const headerMorphingRef = useRef();
  const querySelector = gsap.utils.selector(headerMorphingRef);
  const timeline = useRef();

  useEffect(() => {
    if (hasTransitionMorphing) {
      timeline.current = gsap.timeline().to(headerMorphingRef.current, {
        yPercent: 50,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
        yoyoEase: true,
        duration: 5,
      });

      timeline.current.play();

      setTransitionMorphing(false);
    }
  }, [pathname]);

  const onMorphingTransition = () => {
    setTransitionMorphing(true);
  };
  return (
    <>
      <SideBarIcon />
      <HeaderContainer
        $issidebaractive={isSideBarActive}
        $matchpath={!!pathname.match(RegExp(/^\/$/))}
      >
        <HeaderPILogoContainer
          to={homepageRoute}
          $matchpath={!!pathname.match(RegExp(/^\/$/))}
          $issidebaractive={isSideBarActive}
          onClick={onMorphingTransition}
        >
          <HeaderPILogo />
        </HeaderPILogoContainer>

        <HeaderTextContainer>
          <HeaderLink
            to={homepageRoute}
            $matchpath={!!pathname.match(RegExp(/^\/$/))}
            onClick={onMorphingTransition}
          >
            Home
          </HeaderLink>
          <HeaderLink
            to={aboutRoute}
            $matchpath={!!pathname.match(RegExp(`${aboutRoute}+`))}
            onClick={onMorphingTransition}
          >
            About
          </HeaderLink>

          <HeaderLink
            to={portfolioRoute}
            $matchpath={!!pathname.match(RegExp(`${portfolioRoute}+`))}
            onClick={onMorphingTransition}
          >
            Portfolio
          </HeaderLink>

          <HeaderLink
            to={serviceRoute}
            $matchpath={!!pathname.match(RegExp(`${serviceRoute}+`))}
            onClick={onMorphingTransition}
          >
            Service
          </HeaderLink>

          <HeaderLink
            to={contactRoute}
            $matchpath={!!pathname.match(RegExp(`${contactRoute}+`))}
            onClick={onMorphingTransition}
          >
            Contact
          </HeaderLink>
        </HeaderTextContainer>

        <HeaderMorphing
          $headermorphingproperties={measureHeaderMorphing(
            pathname,
            viewWidth,
            viewHeight,
            aboutRoute,
            portfolioRoute,
            serviceRoute,
            contactRoute
          )}
          ref={headerMorphingRef}
        >
          <HeaderIntro
            $wavyintroproperties={measureWavyIntro(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioRoute,
              serviceRoute,
              contactRoute
            )}
          >
            {(viewWidth < 1024 && viewHeight < 1366) ||
            (viewWidth === 1280 && viewHeight === 800) ? (
              ''
            ) : (
              <TitleHeaderIntro
                className='title-header-intro'
                $measuretitleheaderintroprops={measureTitleHeaderIntro(
                  pathname,
                  viewWidth,
                  viewHeight,
                  aboutRoute,
                  portfolioRoute,
                  serviceRoute,
                  contactRoute
                )}
              >
                {selectTitleHeaderIntro(
                  pathname,
                  viewWidth,
                  viewHeight,
                  aboutRoute,
                  portfolioRoute,
                  serviceRoute,
                  contactRoute
                )}
              </TitleHeaderIntro>
            )}
          </HeaderIntro>
          <WavyBottomSVG
            $wavyproperties={measureBottomWavy(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioRoute,
              serviceRoute,
              contactRoute
            )}
          />
        </HeaderMorphing>
      </HeaderContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  aboutRoute: selectAboutRoute,
  portfolioRoute: selectPortfolioRoute,
  serviceRoute: selectServiceRoute,
  contactRoute: selectContactRoute,
  homepageRoute: selectHomepageRoute,
  isSideBarActive: selectIsSideBarActive,
});

export default withRouter(connect(mapStateToProps)(Header));
