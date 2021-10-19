import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, HashRouter, MemoryRouter, NavLink, Switch } from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import PostItem from './components/post-item';

const App = () => (

  <BrowserRouter>
    <header>
      <NavLink to="/"
        exact
        activeStyle={{ color: 'red' }}
        activeClassName="Selected">Home</NavLink><br />
      <NavLink to="/posts" activeStyle={{ color: 'red' }}>Posts</NavLink><br />
      <NavLink to="/profile" activeStyle={{ color: 'red' }}>Profile</NavLink><br />

      <br /><br />
    </header>
    <Switch>
      <Route
        path="/posts/:id"
        component={PostItem}
      />
      <Route
        path="/posts"
        component={Posts}
      />
      <Route
        path="/profile"
        component={Profile}
      />
      <Route
        path="/"
        component={Home}

      />
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));