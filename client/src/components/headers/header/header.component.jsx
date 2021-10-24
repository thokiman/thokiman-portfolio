import useWindowDimensions from 'components/hooks/window-dimensions/useWindowDimensions.component';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleHeaderMorphingActive } from 'redux/header/header.actions';
import { selectHomepageRoute } from 'redux/homepage/homepage.selectors';
import { createStructuredSelector } from 'reselect';
import { selectAboutRoute } from '../../../redux/about/about.selectors';
import { selectDefaultPortfolioRoute } from '../../../redux/collection/collection.selectors';
import { selectContactRoute } from '../../../redux/contact/contact.selectors';
import {
  selectIsHeaderMorphingActive,
  selectIsSideBarActive,
} from '../../../redux/header/header.selectors';
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
  measureHeaderLink,
  measureHeaderMorphing,
  measureTitleHeaderIntro,
  measureWavyIntro,
  selectTitleHeaderIntro,
} from './header.utils.styles';
export const Header = ({
  location: { pathname },
  aboutRoute,
  portfolioDefaultRoute,
  serviceRoute,
  contactRoute,
  homepageRoute,
  isSideBarActive,
  isHeaderMorphingActive,
  toggleHeaderMorphingActive,
}) => {
  const { viewWidth, viewHeight } = useWindowDimensions();

  const headerMorphingRef = useRef();
  const querySelector = gsap.utils.selector(headerMorphingRef);
  const headerMorphingTl = useRef();

  useEffect(() => {
    if (isHeaderMorphingActive) {
      headerMorphingTl.current = gsap.timeline().to(headerMorphingRef.current, {
        yPercent: 50,
        repeat: 1,
        repeatDelay: 1,
        yoyo: true,
        yoyoEase: true,
        duration: 5,
        onStart: () => {
          toggleHeaderMorphingActive(headerMorphingTl.current.isActive());
          gsap
            .timeline()
            .from(querySelector('.title-header-intro'), {
              autoAlpha: 0,
              delay: 2,
              scaleY: 2,
              skewY: '-25%',
              skewX: '-1%',
              yPercent: 10,
              repeat: 1,
              repeatDelay: 1,
              yoyo: true,
              yoyoEase: true,
              duration: 2,
            })

            .to(
              querySelector('.title-header-intro'),
              {
                delay: 2,
                skewY: '0%',
                scaleY: 1,
                autoAlpha: 1,
                duration: 0.25,
              },
              '>'
            );
        },
        onComplete: () => {
          toggleHeaderMorphingActive(headerMorphingTl.current.isActive());
        },
      });

      headerMorphingTl.current.play();
    }
  }, [pathname]);

  const toggleHeader = () => {
    toggleHeaderMorphingActive(true);
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
          onClick={toggleHeader}
        >
          <HeaderPILogo />
        </HeaderPILogoContainer>

        <HeaderTextContainer>
          <HeaderLink
            $measureheaderlinkprops={measureHeaderLink(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioDefaultRoute,
              serviceRoute,
              contactRoute
            )}
            to={homepageRoute}
            $matchpath={!!pathname.match(RegExp(/^\/$/))}
            onClick={toggleHeader}
          >
            Home
          </HeaderLink>
          <HeaderLink
            $measureheaderlinkprops={measureHeaderLink(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioDefaultRoute,
              serviceRoute,
              contactRoute
            )}
            to={aboutRoute}
            $matchpath={!!pathname.match(RegExp(`${aboutRoute}+`))}
            onClick={() => toggleHeader(aboutRoute)}
          >
            About
          </HeaderLink>

          <HeaderLink
            $measureheaderlinkprops={measureHeaderLink(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioDefaultRoute,
              serviceRoute,
              contactRoute
            )}
            to={portfolioDefaultRoute}
            $matchpath={!!pathname.match(RegExp(`${portfolioDefaultRoute}+`))}
            onClick={toggleHeader}
          >
            Portfolio
          </HeaderLink>

          <HeaderLink
            $measureheaderlinkprops={measureHeaderLink(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioDefaultRoute,
              serviceRoute,
              contactRoute
            )}
            to={serviceRoute}
            $matchpath={!!pathname.match(RegExp(`${serviceRoute}+`))}
            onClick={toggleHeader}
          >
            Service
          </HeaderLink>

          <HeaderLink
            $measureheaderlinkprops={measureHeaderLink(
              pathname,
              viewWidth,
              viewHeight,
              aboutRoute,
              portfolioDefaultRoute,
              serviceRoute,
              contactRoute
            )}
            to={contactRoute}
            $matchpath={!!pathname.match(RegExp(`${contactRoute}+`))}
            onClick={toggleHeader}
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
            portfolioDefaultRoute,
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
              portfolioDefaultRoute,
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
                  portfolioDefaultRoute,
                  serviceRoute,
                  contactRoute
                )}
              >
                {selectTitleHeaderIntro(
                  pathname,
                  viewWidth,
                  viewHeight,
                  aboutRoute,
                  portfolioDefaultRoute,
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
              portfolioDefaultRoute,
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
  portfolioDefaultRoute: selectDefaultPortfolioRoute,
  serviceRoute: selectServiceRoute,
  contactRoute: selectContactRoute,
  homepageRoute: selectHomepageRoute,
  isSideBarActive: selectIsSideBarActive,
  isHeaderMorphingActive: selectIsHeaderMorphingActive,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHeaderMorphingActive: (isActivated) =>
    dispatch(toggleHeaderMorphingActive(isActivated)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
