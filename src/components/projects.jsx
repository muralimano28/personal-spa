"use strict";

import React from "react";
import { Link } from "react-router";

// Static data.
import projectsInfo from "../utils/projects-data.js";

class Projects extends React.Component {
	_renderHelper (type, data) {
		switch (type) {
			case "tags":
				// This returs tags generated from array.
				let tags = data.tags.map((eachData, idx) => {
								return (<div key={idx} className="tag">
											<span className="circle">
												<span></span>
											</span>
											<span className="name">
												{eachData}
											</span>
											<span className="triangle">
											</span>
										</div>);
							});
				return (<div className="tag-list">
							{tags}
						</div>);
			default:
				// default handles case "projects"
				return projectsInfo.map((eachData, idx) => {
					let title = (eachData.projectLink) ? 
						(<a href={eachData.projectLink}>
						 	<h3 className="icon link">{eachData.title}</h3>
						 </a>) : (<h3>{eachData.title}</h3>);
					let githubLink = (eachData.githubLink) ?
						(<a href={eachData.githubLink} className="github-link icon github">View in github</a>) : null;

					return (<div key={idx} className="wrapper">
								<div className="container">
									<div>
										{title}
										{/* githubLink */}
									</div>
									{this._renderHelper("tags", {"tags": eachData.tags})}
									<p>{eachData.description}</p>
									<p className="technology">{eachData.technology}</p>
									{githubLink}
								</div>
							</div>);
				});
		}
	}
	constructor (props) {
		super(props);

		// Binding "this" to all member functions.
		this._renderHelper = this._renderHelper.bind(this);
	}
	render () {
		return (<section className="projects page">
					<h2 className="title icon projects">Projects</h2>
					<span className="goto">Goto / <Link to="/">home</Link></span>
					<div className="body">
						{this._renderHelper("projects", null)}
					</div>
				</section>);
	}
}

export default Projects;
