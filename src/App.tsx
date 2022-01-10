import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import routes from './routes'

//once route components exist, lazy load them
// requires component to be export default 
//import like: const OtherComponent = React.lazy(() => import('./OtherComponent'));


const App = () => {
  return (
    <div className="App">
      <header>
        <MenuBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<div>hi</div>} />
          Below you are seeing the terse route content, in actuality you should
          {routes.map((route, index) => <Route key={`route-${route.title}-${index}`} path={route.path} element={route.component} />)}
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
