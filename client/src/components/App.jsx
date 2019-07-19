import React, { Component } from 'react';
import Sidenav from './SideNav';
import Main from './Main';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

class App extends Component {
  connectToServer = () => {
    fetch('/');
  };

  componentDidMount() {
    this.connectToServer();

    ReactGA.initialize('UA-90891616-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Router>
        <ScrollTop>
          <Sidenav />
          <Main />
          <Footer />
        </ScrollTop>
      </Router>
    );
  }
}

export default App;
