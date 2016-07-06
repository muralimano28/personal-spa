"use strict";

import React from "react";
import { Link } from "react-router";

class ContactInfo extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="contact page">
					<h2 className="title icon user">Contact info</h2>
					<span className="goto">Goto / <Link to="/">home</Link></span>
					<div className="body">
					</div>
				</section>);
	}
}

export default ContactInfo;
