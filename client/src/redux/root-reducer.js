import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import aboutReducer from './about/about.reducers';
import collectionReducer from './collection/collection.reducers';
import contactReducer from './contact/contact.reducers';
import headerReducer from './header/header.reducers';
import homepageReducer from './homepage/homepage.reducers';
import serviceReducer from './service/service.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  about: aboutReducer,
  collection: collectionReducer,
  contact: contactReducer,
  service: serviceReducer,
  header: headerReducer,
  homepage: homepageReducer,
});

export default persistReducer(persistConfig, rootReducer);
