import React, { Component } from 'react';
import Sidenav from './SideNav';
import Main from './Main';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

    connectToServer = () => {
        console.log("Fetching?")
        fetch('/');
    }

    componentDidMount() {
        this.connectToServer();
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