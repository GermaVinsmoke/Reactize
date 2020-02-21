import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loading from './Loading';

const GettingStarted = lazy(() => import('./GettingStarted'));
const AutoComplete = lazy(() =>
	import('../components/Autocomplete/Autocomplete.jsx')
);
const Carousel = lazy(() => import('../components/Carousel/Carousel.jsx'));
const Collapsible = lazy(() => import('../components/Collapsible/Collapsible'));
const Dropdown = lazy(() => import('../components/Dropdown/Dropdown'));
const MaterialBox = lazy(() =>
	import('../components//Material Box/MaterialBox')
);
const Slider = lazy(() => import('../components/Slider/Slider'));
const Modal = lazy(() => import('../components/Modal/Modal'));
const Parallax = lazy(() => import('../components/Parallax/Parallax'));
const Tooltips = lazy(() => import('../components/Tooltips/Tooltips'));
const Toasts = lazy(() => import('../components/Toasts/Toasts'));
const Tabs = lazy(() => import('../components/Tabs/Tabs'));
const Sidenav = lazy(() => import('../components/Sidenav/Sidenav'));
const Scrollspy = lazy(() => import('../components/Scrollspy/Scrollspy'));
const TextInput = lazy(() => import('../components/Text Input/TextInput'));
const Select = lazy(() => import('../components/Select/Select'));
const Datepicker = lazy(() => import('../components/Datepicker/Datepicker'));
const Timepicker = lazy(() => import('../components/Timepicker/Timepicker'));
const Chips = lazy(() => import('../components/Chips/Chips'));

// import GettingStarted from './GettingStarted';
// import AutoComplete from '../components/Autocomplete/Autocomplete.jsx';
// import Carousel from '../components/Carousel/Carousel.jsx';
// import Collapsible from '../components/Collapsible/Collapsible';
// import Dropdown from '../components/Dropdown/Dropdown';
// import MaterialBox from '../components//Material Box/MaterialBox';
// import Slider from '../components/Slider/Slider';
// import Modal from '../components/Modal/Modal';
// import Parallax from '../components/Parallax/Parallax';
// import Tooltips from '../components/Tooltips/Tooltips';
// import Toasts from '../components/Toasts/Toasts';
// import Tabs from '../components/Tabs/Tabs';
// import Sidenav from '../components/Sidenav/Sidenav';
// import Scrollspy from '../components/Scrollspy/Scrollspy';
// import TextInput from '../components/Text Input/TextInput';
// import Select from '../components/Select/Select';
// import Datepicker from '../components/Datepicker/Datepicker';
// import Timepicker from '../components/Timepicker/Timepicker';
// import Chips from '../components/Chips/Chips';

const Main = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path="/" component={GettingStarted} />
				<Route path="/autocomplete" component={AutoComplete} />
				<Route path="/carousel" component={Carousel} />
				<Route path="/collapsible" component={Collapsible} />
				<Route path="/dropdown" component={Dropdown} />
				<Route path="/material_box" component={MaterialBox} />
				<Route path="/slider" component={Slider} />
				<Route path="/modal" component={Modal} />
				<Route path="/parallax" component={Parallax} />
				<Route path="/tooltips" component={Tooltips} />
				<Route path="/toasts" component={Toasts} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/sidenav" component={Sidenav} />
				<Route path="/scrollspy" component={Scrollspy} />
				<Route path="/text_input" component={TextInput} />
				<Route path="/select" component={Select} />
				<Route path="/datepicker" component={Datepicker} />
				<Route path="/timepicker" component={Timepicker} />
				<Route path="/chips" component={Chips} />
			</Switch>
		</Suspense>
	);
};

export default Main;
