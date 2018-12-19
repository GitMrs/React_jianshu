import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route }  from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store/index';
import Header from './common/header/index';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component = {Home}></Route>
              <Route path='/Login' exact component = {Login}></Route>
              <Route path='/write' exact component = {Write}></Route>
              <Route path='/detail/:id' exact component = {Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
        
      </div>
    );
  }
}

export default App;
