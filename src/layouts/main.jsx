"use strict";

import React from "react"
import { Link, IndexLink } from "react-router";

// Utilities
import Utils from "../utils/general.js";

class MainLayout extends React.Component {
	_onClickHandler (type, data) {
		switch (type) {
			default:
				// default handles case: "menu"
				if (this.refs.layout.className.indexOf("sidebar-is-active") < 0) {
					// Add class "sidebar-is-active" to this.refs.layout
					Utils.updateClassName(this.refs.layout, "sidebar-is-active");
				} else {
					// Remove class "sidebar-is-active" from this.refs.layout
					Utils.updateClassName(this.refs.layout, "sidebar-is-active", true);
				}
		}
	}
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="main-layout" ref="layout">
					<div className="content">
						<div className="sidebar-btn">
							<span className="icon ham-menu" onClick={(e) => this._onClickHandler ("menu", null)}>Menu</span>
						</div>
						<div className="middle">
							{this.props.children}
						</div>
					</div>
					<div className="sidebar">
						<ul className="noul">
							<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
							<li><IndexLink to="experiences" activeClassName="active">Experience</IndexLink></li>
							<li><IndexLink to="github-repos" activeClassName="active">Github repos</IndexLink></li>
							<li><IndexLink to="projects" activeClassName="active">Projects</IndexLink></li>
							<li><IndexLink to="skills" activeClassName="active">Skills</IndexLink></li>
							<li><IndexLink to="contact-info" activeClassName="active">Contact info</IndexLink></li>
						</ul>
					</div>
				</section>);
	}
}

export default MainLayout;
