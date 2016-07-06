"use strict";

import React from "react";
import { Link } from "react-router";

class Projects extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="projects page">
					<h2 className="title icon projects">Projects</h2>
					<span className="goto">Goto / <Link to="/">home</Link></span>
					<div className="body">
					</div>
				</section>);
	}
}

export default Projects;
