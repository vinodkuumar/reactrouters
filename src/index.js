import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';

const App = () => (
  
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link><br />
      <Link to="/posts">Posts</Link><br />
      <Link to="/profile">Profile</Link><br />
      <br /><br />
      </header>
    <Route
        path="/"
        component={Home}
        exact
      />
      <Route
        path="/posts"
        component={Posts}
        exact
      />
      <Route
        path="/profile"
        component={Profile}
        exact
      />

    </BrowserRouter>

)

ReactDOM.render(<App />, document.getElementById('root'));