import React, { Suspense, useState, lazy } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import routes from './routes'

import loadable from '@loadable/component'
//const Login = loadable(() => import('./components/Login/Login'))
//import Login from './components/Login/Login'

//once route components exist, lazy load them
// requires component to be export default 
const Login = lazy(() => import('./components/Login/Login'));


const App = () => {
  const [token, setToken] = useState('');
  console.log(token)
  if (!token) {
    return <Suspense fallback={<div>Loading</div>}>{<Login setToken={setToken} />}</Suspense>
  }
  return (
    <div className="App">
      <header>
        <MenuBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<div>hi</div>} />
          Below you are seeing the terse route content, in actuality you should
          {routes.map((route, index) => <Route key={`route-${route.title}-${index}`} path={route.path} element={<Suspense fallback={null}>{lazy(() => import(route.path))}</Suspense>} />)}
        </Routes>
      </main>
    </div>
  );
}

const MenuBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="route1">Route 1</Link>
    <Link to="route2">Route 2</Link>
    <Link to="route3">Route 3</Link>
  </nav>
)

export default App;
