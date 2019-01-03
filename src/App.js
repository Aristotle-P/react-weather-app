import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Weather from './components/Weather';
import Location from './components/Location';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Location />
          <Weather />
        </div>
      </Provider>
    );
  }
}

export default App;
