import { all } from 'redux-saga/effects';
// import Sagas from './path';


const sagasList = [
  // ...Sagas,
];


function* rootSagas() {
  yield all(sagasList);
}


export default rootSagas;
