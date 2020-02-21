import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Loading from '../Loading';
import './Chips.css';

const Content = lazy(() => import('./Content'));
const ChipsDemo = lazy(() => import('./ChipsDemo'));
const Aside = lazy(() => import('../Aside'));

const Chips = ({ match }) => {
	return (
		<div className="spacingLeft">
			<header>
				<Header headerText="Chips" />
			</header>
			<main className="col s12 m9">
				<div className="row">
					<div className="col s12 m9">
						<Suspense fallback={<Loading />}>
							<Route exact path={`${match.url}`} component={ChipsDemo} />
							<Route path={`${match.url}/:id`} component={Content} />
						</Suspense>
					</div>
					<div className="col s12 m3 hide-on-med-and-down">
						<Suspense fallback={<Loading />}>
							<Aside data={['Ref and the DOM']} />
						</Suspense>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Chips;
