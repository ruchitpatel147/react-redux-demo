import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './Components/CakeContainer'
import HookCakeContainer from './Components/HookCakeContainer'
import FetchComponent from './Components/FetchComponent'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <header className="App-header">
        <FetchComponent/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
