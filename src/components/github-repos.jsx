"use strict";

import React from "react";
import { Link } from "react-router";

class GithubRepos extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="github page">
					<h2 className="title icon github">Github repos</h2>
					<span className="goto">Goto / <Link to="/">home</Link></span>
					<div className="body">
					</div>
				</section>);
	}
}

export default GithubRepos;
