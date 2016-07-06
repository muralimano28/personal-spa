"use strict";

import React from "react";

class Home extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="main-page">
					<h2 className="title icon home">Home</h2>
					<div className="body">
						<h1 className="name">Murali manohar</h1>
					</div>
				</section>);
	}
}

export default Home;
