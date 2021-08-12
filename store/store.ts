import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducer';
import rootSaga from './sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
middlewares.push(sagaMiddleware);

const persistReducers = persistReducer(persistConfig, RootReducer);
export const store = createStore(
  persistReducers,
  applyMiddleware(...middlewares),
);
sagaMiddleware.run(rootSaga);
export const persitor = persistStore(store);
