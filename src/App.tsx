import { useEffect, useState } from 'react';

import Loader from './common/Loader';
import routes from './routes.tsx';
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState<boolean>(true);

  console.log('user', user);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const routeItems = routes(user).map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
  return loading ? <Loader /> : <Routes>{routeItems}</Routes>;
}

export default App;
