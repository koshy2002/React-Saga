import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './../sagas/sagas';
import {initSagas} from './initSagas'
import initialState from './../reducers/initialState';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk,sagaMiddleware, reduxImmutableStateInvariant())
    );
    sagaMiddleware.run(mySaga);
  // initSagas(sagaMiddleware);
    //jibin----
    return store;
  }
