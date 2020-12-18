import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';

import Home from './components/Home';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <header>
          <NavigationBar />
        </header>
        <div className="container flex mt-4">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
