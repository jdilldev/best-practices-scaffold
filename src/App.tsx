import React, { Suspense, useState, lazy } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import routes from './routes'
import loadable from '@loadable/component'
import { AiOutlineMenu } from 'react-icons/ai'

const Login = React.lazy(() => import('./components/Login/Login'));//import Login from './components/Login/Login'

//once route components exist, lazy load them
// requires component to be export default 

const App = () => {
  const [token, setToken] = useState('');
  const [showMenu, setMenuStatus] = useState(false);

  console.log(token)
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <header>
        <MenuBar showMenu={showMenu} setMenuStatus={setMenuStatus} />
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

const MenuBar = ({ showMenu, setMenuStatus }: { showMenu: boolean, setMenuStatus: (status: boolean) => void }) => (
  <nav>
    <i>
      <AiOutlineMenu className='menu-icon' size={25} onClick={() => setMenuStatus(!showMenu)} />
      <menu style={{ position: 'relative', flexDirection: 'column', display: showMenu ? 'flex' : 'none' }}>
        <Link to="/">Home</Link>
        <Link to="route1">Route 1</Link>
        <Link to="route2">Route 2</Link>
        <Link to="route3">Route 3</Link></menu>
    </i>
    <menu className='menu-list'>
      <Link to="/">Home</Link>
      <Link to="route1">Route 1</Link>
      <Link to="route2">Route 2</Link>
      <Link to="route3">Route 3</Link>
    </menu>
  </nav>
)

export default App;
