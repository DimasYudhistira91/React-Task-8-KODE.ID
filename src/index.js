import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/About';
import Subscribe from './pages/subscribe';
import NotFound from './pages/notFound';
import Cart from './Cart';

const RootApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/subscribe' component={Subscribe} />
      <Route path='/contact' component={() => <Redirect to='/about'/>} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

// ReactDOM.render(<RootApp />, document.getElementById('root'));
ReactDOM.render(<Cart />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
