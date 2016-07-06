"use strict";

import React from "react";
import { Link } from "react-router";

import Utils from "../utils/general.js";

class Experiences extends React.Component {
	_onClickHandler (type, data) {
		switch (type) {
			default:
				// default handles case: projects
				let dom = this.refs[data.refName];
				if (dom.className.indexOf("is-active") < 0) {
					// Add class "is-active" to the dom.
					Utils.updateClassName(dom, "is-active");
				} else {
					// Remove class "is-active" from the dom.
					Utils.updateClassName(dom, "is-active", true);
				}
		}
	}
	constructor (props) {
		super(props);

		// Binding this to the class member functions.
		this._onClickHandler = this._onClickHandler.bind(this);
	}
	render () {
		return (<section className="experiences page">
					<h2 className="title icon graph">Experiences</h2>
					<span className="goto">Goto / <Link to="/">home</Link></span>
					<div className="body">
						<div>
							<h3 className="icon v-ellipsis">Software developer (Open source technologies)</h3>
							<h4><a href="http://www.bookmyshow.com">Bookmyshow.com</a></h4>
							<span className="duration">September 2015 - Present | Bangalore, India</span>
							<div className="projects" ref="project-1">
								<span
									className="icon caret-right"
									onClick={() => this._onClickHandler("projects", {"refName": "project-1"})}
								>1 Project</span>
								<div className="container">
									<div>
										<p>1. DIY - Do it yourself ( <Link to="projects">view in projects section</Link> )</p>
										<div className="details">
											<p className="tags">Front-end: HTML5 | Javascript | CSS3 | React.js | Flux Architecture</p>
											<p className="tags">Dev-tools: Gulp | ESlint (for linting) | Babel</p>
											<p className="tags">Back-end: Golang | MongoDB | RethinkDB</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="icon v-ellipsis">Software developer</h3>
							<h4><a href="http://www.aricent.com">Aricent</a></h4>
							<span className="duration">October 2014 - August 2015 | Bangalore, India</span>
							<div className="projects" ref="project-2">
								<span
									className="icon caret-right"
									onClick={() => this._onClickHandler("projects", {"refName": "project-2"})}
								>2 Projects</span>
								<div className="container">
									<div>
										<p>1. Real time google maps locator with docking for IOT ( <Link to="projects">view in projects section</Link> )</p>
										<div className="details">
											<p className="tags">Front-end: HTML5 | Javascript | CSS3 | Angular.js</p>
											<p className="tags">Back-end: .Net</p>
										</div>
									</div>
									<div>
										<p>2. TFTP Trivial File Transfer Protocol ( <Link to="projects">view in projects section</Link> )</p>
										<div className="details">
											<p className="tags">Language: C | SVN | RFC 1350</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="icon v-ellipsis">Freelance web developer</h3>
							<span className="duration">March 2016 - Present | Bangalore, India</span>
							<div className="projects" ref="project-3">
								<span
									className="icon caret-right"
									onClick={() => this._onClickHandler("projects", {"refName": "project-3"})}
								>2 Projects</span>
								<div className="container">
									<div>
										<p>1. Mieteam ( <Link to="projects">view in projects section</Link> )</p>
										<div className="details">
											<p className="tags">Front-end: HTML5 | Javascript | CSS3 | React.js | Flux Architecture</p>
											<p className="tags">Dev-tools: Gulp | ESlint (for linting) | Babel</p>
											<p className="tags">Back-end: Golang | MongoDB</p>
										</div>
									</div>
									<div>
										<p>2. Ready Assistance ( <Link to="projects">view in projects section</Link> )</p>
										<div className="details">
											<p className="tags">Front-end: HTML5 | Javascript | CSS3 | React.js | Flux Architecture</p>
											<p className="tags">Dev-tools: Gulp | ESlint (for linting) | Babel</p>
											<p className="tags">Back-end: Node.js | MongoDB</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>);
	}
}

export default Experiences;
