import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js';
import AppContainer from './AppContainer.js';

function App() {
  return (
    <React.Fragment>
      <header>
        <NavigationBar />
      </header>
      <div className="container flex">
        <AppContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
