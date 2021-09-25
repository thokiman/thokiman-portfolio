import { other } from '../../data.object/other.data.js';

const INITIAL_STATE = {
  other,
  homepageRoute: '/',
};

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homepageReducer;
