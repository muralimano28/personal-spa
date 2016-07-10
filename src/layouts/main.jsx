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
				let dom = data.ev.target;
				if (this.refs.layout.className.indexOf("sidebar-is-active") < 0) {
					// Add class "sidebar-is-active" to this.refs.layout
					Utils.updateClassName(this.refs.layout, "sidebar-is-active");
					dom.innerHTML = "Close";
					dom.className="icon close";
				} else {
					// Remove class "sidebar-is-active" from this.refs.layout
					Utils.updateClassName(this.refs.layout, "sidebar-is-active", true);
					dom.innerHTML = "Menu";
					dom.className="icon ham-menu";
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
							<span
								className="icon ham-menu"
								onClick={(e) => this._onClickHandler ("menu", {"ev": e})}
							>Menu</span>
						</div>
						<div className="middle">
							{this.props.children}
						</div>
					</div>
					<div className="sidebar">
						<ul className="noul">
							<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
							<li><IndexLink to="skills" activeClassName="active">Skills</IndexLink></li>
							<li><IndexLink to="experiences" activeClassName="active">Experience</IndexLink></li>
							<li><IndexLink to="projects" activeClassName="active">Projects</IndexLink></li>
							{/*<li><IndexLink to="github-repos" activeClassName="active">Github repos</IndexLink></li>*/}
						</ul>
					</div>
					{/* <footer>
						<div className="copyright">
							Developed and Maintained by me. (Feel free to copy anything)
						</div>
						<div className="links">
							<ul className="noul">
							</ul>
						</div>
					</footer> */}
				</section>);
	}
}

export default MainLayout;
