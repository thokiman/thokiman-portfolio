const {
  about: {
    aboutPath: { routeName: aboutRoute },
  },
} = require('../data.object/about.data');
const {
  collection: {
    all: { routeName: portfolioRoute },
  },
} = require('../data.object/collection.data');
const {
  contact: { routeName: contactRoute },
} = require('../data.object/contact.data');
const {
  service: { routeName: serviceRoute },
} = require('../data.object/service.data');

export const measureHeaderMorphing = (pathname) => {
  if (!!pathname.match(RegExp(/^\/$/))) {
    return {
      top: -220,
    };
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    return {
      top: -237,
    };
  } else if (!!pathname.match(RegExp(`${portfolioRoute}+`))) {
    return {
      top: -245,
    };
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    return {
      top: -240,
    };
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    return {
      top: -245,
    };
  }
};

export const measureWavyIntro = (pathname) => {
  if (!!pathname.match(RegExp(/^\/$/))) {
    return {
      backgroundColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    return {
      backgroundColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${portfolioRoute}+`))) {
    return {
      backgroundColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    return {
      backgroundColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    return {
      backgroundColor: '#000000',
    };
  }
};

export const measureBottomWavy = (pathname) => {
  if (!!pathname.match(RegExp(/^\/$/))) {
    return {
      strokeColor: '#74c6d4',
      fillColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${aboutRoute}+`))) {
    return {
      strokeColor: '#128194',
      fillColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${portfolioRoute}+`))) {
    return {
      strokeColor: '#128194',
      fillColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${serviceRoute}+`))) {
    return {
      strokeColor: '#128194',
      fillColor: '#000000',
    };
  } else if (!!pathname.match(RegExp(`${contactRoute}+`))) {
    return {
      strokeColor: '#128194',
      fillColor: '#000000',
    };
  }
};
