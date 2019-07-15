const AsyncRoute = (Component, key, reducers, sagas) => store => {
  store.injectReducers(key, reducers);

  if (typeof sagas !== 'undefined') {
    store.sagaRun(key, sagas);
  }

  return Component;
};


export default AsyncRoute;
