import { useEffect, useState } from 'react';

import Loader from './common/Loader';
import routes from './routes.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  const routeItems = routes().map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
  return loading ? <Loader /> : <Routes>{routeItems}</Routes>;
}

export default App;
