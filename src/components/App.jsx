import React from 'react';
import Sidenav from './SideNav';
import Main from './Main';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
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

export default App;