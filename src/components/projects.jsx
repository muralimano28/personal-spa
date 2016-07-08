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
					if (idx === 1) {
						let title = (eachData.projectLink) ? 
							(<a href={eachData.projectLink}>
							 	<h3 className="icon link">{eachData.title}</h3>
							 </a>) : (<h3>eachData.title</h3>);

						console.log("eachData: ", eachData);
						return (<div key={idx}>
									<header>
										{title}
										{this._renderHelper("tags", {"tags": eachData.tags})}
									</header>
								</div>);
					}
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
