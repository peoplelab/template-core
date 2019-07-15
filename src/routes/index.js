// import AsyncComponent from '../generators/AsyncComponent';
import Home from './Home';


const createRoutes = store => ({
  primary: [
    {
      path: '/',
      key: 'home',
      exact: true,
      component: Home(store),
    },
    // {
    //   path: '/path',
    //   key: 'route-key',
    //   exact: true,
    //   component: AsyncComponent(store)(() => import(/* webpackChunkName: "ChunkName" */ './RouteName')),
    // },
  ],
  // secondary
  // logged
  // external
});


export default createRoutes;
