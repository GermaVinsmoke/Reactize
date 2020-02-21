import React, { Component } from 'react';

class Loading extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					height: '100vh',
					alignItems: 'center'
				}}
			>
				<div className="preloader-wrapper big active">
					<div className="spinner-layer spinner-blue-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
						</div>
						<div className="gap-patch">
							<div className="circle"></div>
						</div>
						<div className="circle-clipper right">
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Loading;
