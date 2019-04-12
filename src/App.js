import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentA from './components/componentA';

import ContextDemo1 from './movieComponent/index1';

 
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserProvider value="ankit raj" >
        <ComponentA/>
        </UserProvider> */}
        
        <ContextDemo1 />
        
      </div>
    );
  }
}
