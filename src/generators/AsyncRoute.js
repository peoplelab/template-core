const AsyncRoute = (Component, key, reducers, sagas) => store => {
  store.injectReducers(key, reducers);
  store.saga.run(key, sagas);

  return Component;
};


export default AsyncRoute;
