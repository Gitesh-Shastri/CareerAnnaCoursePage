import React, { Component } from 'react';
import './App.scss';

import {BrowserRouter} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import ReactGA from 'react-ga';

import ParticularCourse from './ParticularCourse/ParticularCourse';
import Footer from './Footer/Footer';
/*
 */
ReactGA.initialize('UA-121888397-1');

class App extends Component {

componentDidMount  = () => ReactGA.pageview(window.location.pathname + window.location.search);
componentDidUpdate = () => ReactGA.pageview(window.location.pathname + window.location.search);

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navigation /> 
      <ParticularCourse />
       <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
