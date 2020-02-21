import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Headings/Header';
import Loading from '../Loading';
import './Carousel.css';
import '../AsideStyle.css';

const Aside = lazy(() => import('../Aside'));
const Content = lazy(() => import('./Content'));
const CarouselDemo = lazy(() => import('./CarouselDemo'));

const Carousel = ({ match }) => {
	return (
		<div className="spacingLeft">
			<header>
				<Header headerText="Carousel" />
			</header>
			<main className="col s12 m9">
				<div className="row">
					<div className="col s12 m9">
						<Suspense fallback={<Loading />}>
							<Route exact path={`${match.url}`} component={CarouselDemo} />
							<Route path={`${match.url}/:id`} component={Content} />
						</Suspense>
					</div>
					<div className="col s12 m3 hide-on-med-and-down">
						<Suspense fallback={<Loading />}>
							<Aside data={['Ref and the DOM', 'Carousel Special']} />
						</Suspense>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Carousel;
