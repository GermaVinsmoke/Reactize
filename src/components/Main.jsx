import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GettingStarted from './GettingStarted';
import AutoComplete from '../components/Autocomplete/Autocomplete.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import Collapsible from '../components/Collapsible/Collapsible';
import Dropdown from '../components/Dropdown/Dropdown';
import MaterialBox from '../components//Material Box/MaterialBox';
import Slider from '../components/Slider/Slider';
import Modal from '../components/Modal/Modal';
import Parallax from '../components/Parallax/Parallax';
import Tooltips from '../components/Tooltips/Tooltips';
import Toasts from '../components/Toasts/Toasts';
import Tabs from '../components/Tabs/Tabs';
import Sidenav from '../components/Sidenav/Sidenav';
import Scrollspy from '../components/Scrollspy/Scrollspy';
import TextInput from '../components/Text Input/TextInput';
import Select from '../components/Select/Select';
import Datepicker from '../components/Datepicker/Datepicker';
import Timepicker from '../components/Timepicker/Timepicker';
import Chips from '../components/Chips/Chips';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={GettingStarted} />
            <Route path='/autocomplete' component={AutoComplete} />
            <Route path='/carousel' component={Carousel} />
            <Route path='/collapsible' component={Collapsible} />
            <Route path='/dropdown' component={Dropdown} />
            <Route path='/material_box' component={MaterialBox} />
            <Route path='/slider' component={Slider} />
            <Route path='/modal' component={Modal} />
            <Route path='/parallax' component={Parallax} />
            <Route path='/tooltips' component={Tooltips} />
            <Route path='/toasts' component={Toasts} />
            <Route path='/tabs' component={Tabs} />
            <Route path='/sidenav' component={Sidenav} />
            <Route path='/scrollspy' component={Scrollspy} />
            <Route path='/text_input' component={TextInput} />
            <Route path='/select' component={Select} />
            <Route path='/datepicker' component={Datepicker} />
            <Route path='/timepicker' component={Timepicker} />
            <Route path='/chips' component={Chips} />
        </Switch>
    );
}

export default Main;