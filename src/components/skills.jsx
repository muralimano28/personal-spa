"use strict";

import React from "react";
import { Link } from "react-router";

class Skills extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="skills page">
					<h2 className="title icon code">Skills</h2>
					<span className="goto">Goto / <Link to="/">home</Link></span>
					<div className="body">
						<div className="technical">
							<h3>Technical skills</h3>
							<div className="sub-container">
								<h4 className="icon pencil">Languages</h4>
								<div>
									<div className="skill">
										<span className="type">HTML 4</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">HTML 5</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">JS (ES5 & ES6)</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">CSS3</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">C</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">C++</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">SQL</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">NoSQL</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Go</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Java</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">XML</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Web design</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>2/5</span>
										</div>
									</div>
								</div>
							</div>
							<div className="sub-container">
								<h4 className="icon pencil">Frameworks</h4>
								<div>
									<div className="skill">
										<span className="type">React.js</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">NodeJS</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Express JS</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Angular.js (version 1)</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">MYSQL</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">JQuery</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">MongoDB</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3/5</span>
										</div>
									</div>
								</div>
							</div>
							<div className="sub-container">
								<h4 className="icon pencil">Architectures</h4>
								<div>
									<div className="skill">
										<span className="type">Flux (With react)</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">REST</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Redux (With react)</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>2/5</span>
										</div>
									</div>
								</div>
							</div>
							<div className="sub-container">
								<h4 className="icon pencil">Tools</h4>
								<div>
									<div className="skill">
										<span className="type">Gulp</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Babel</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Grunt</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>4.5/5</span>
										</div>
									</div>
									<div className="skill">
										<span className="type">Sketch (For Design)</span>
										<div className="rating">
											<span className="label">Rating</span>
											<span>3/5</span>
										</div>
									</div>
								</div>
							</div>
							<div className="sub-container">
								<h4 className="icon pencil">Editors</h4>
								<div>
									<div className="skill">
										<span className="type">Vim (My fav)</span>
									</div>
									<div className="skill">
										<span className="type">Sublime</span>
									</div>
									<div className="skill">
										<span className="type">Atom</span>
									</div>
									<div className="skill">
										<span className="type">Brackets</span>
									</div>
								</div>
							</div>
							<div className="sub-container">
								<h4 className="icon pencil">Operating systems</h4>
								<div>
									<div className="skill">
										<span className="type">Mac OSX</span>
									</div>
									<div className="skill">
										<span className="type">Windows</span>
									</div>
									<div className="skill">
										<span className="type">Linux (Ubuntu, Linux mint, Backtrack)</span>
									</div>
								</div>
							</div>
						</div>
						<div className="others">
							<h3>Personal skills</h3>
							<p>Quick learner | Self starter | Deterministic | Highly motivated | Strong analytical skills | Good problem solving skills</p>
						</div>
					</div>
				</section>);
	}
}

export default Skills;
