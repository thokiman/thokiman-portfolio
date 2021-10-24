import gsap from 'gsap';
import {
  getInAboutTimeline,
  getOutAboutTimeline,
} from './about-transition.component';
import {
  getInContactTimeline,
  getOutContactTimeline,
} from './contact-transition.component';
import {
  getInDefaultTimeline,
  getOutDefaultTimeline,
} from './default-transition.component';
import {
  getInHomepageTimeline,
  getOutHomeTimeline,
} from './homepage-transition.component';
import {
  getInPortfolioTimeline,
  getOutPortfolioTimeline,
} from './portfolio-transition.compoenent';
import {
  getInServiceTimeline,
  getOutServiceTimeline,
} from './service-transition.component';
gsap.config({ force3D: true });
export const play = (pathname, node, appears, routes) => {
  const {
    aboutRoute,
    serviceRoute,
    portfolioDefaultRoute,
    contactRoute,
    homepageRoute,
  } = routes;

  const delay = appears ? 0 : 2;
  let timeline;

  if (pathname.match(`^${homepageRoute}$`)) {
    timeline = getInHomepageTimeline(node, delay);
  } else if (pathname.match(`^${aboutRoute}$`)) {
    timeline = getInAboutTimeline(node, delay);
  } else if (pathname.match(`^${portfolioDefaultRoute}$`)) {
    timeline = getInPortfolioTimeline(node, delay);
  } else if (pathname.match(`^${serviceRoute}$`)) {
    timeline = getInServiceTimeline(node, delay);
  } else if (pathname.match(`^${contactRoute}$`)) {
    timeline = getInContactTimeline(node, delay);
  } else {
    timeline = getInDefaultTimeline(node, delay, pathname, routes);
  }

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (pathname, node, routes, isHeaderMorphingActive) => {
  const {
    aboutRoute,
    serviceRoute,
    portfolioDefaultRoute,
    contactRoute,
    homepageRoute,
  } = routes;

  const delay = 3;
  let timeline;

  if (pathname.match(`^${homepageRoute}$`)) {
    timeline = getOutHomeTimeline(node, delay);
  } else if (pathname.match(`^${aboutRoute}$`)) {
    timeline = getOutAboutTimeline(node, delay, pathname, routes);
  } else if (pathname.match(`^${portfolioDefaultRoute}$`)) {
    timeline = getOutPortfolioTimeline(node, delay);
  } else if (pathname.match(`^${serviceRoute}$`)) {
    timeline = getOutServiceTimeline(node, delay, pathname, routes);
  } else if (pathname.match(`^${contactRoute}$`)) {
    timeline = getOutContactTimeline(node, delay);
  } else {
    timeline = getOutDefaultTimeline(
      node,
      delay,
      pathname,
      routes,
      isHeaderMorphingActive
    );
  }

  timeline.play();
};
