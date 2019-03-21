import React from 'react';
import Sidenav from './SideNav';
import Main from './Main';
import ScrollTop from './ScrollTop';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <ScrollTop>
                <Sidenav />
                <Main />
            </ScrollTop>
        </Router>
    );
}

export default App;