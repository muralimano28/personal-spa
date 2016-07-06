"use strict";

import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (<section className="home-page">
					{/*<h2 className="title icon home">Home</h2>*/}
					<div className="body">
						<h1 className="name">Murali manohar</h1>
						<p className="tags">
							Front-end developer (sometimes back-end too) | Atheist | Foodie | Cooking enthusiast | Nature lover | Gadgets freak (Especially apple products)
						</p>
						<p className="about">
							I am a front-end developer working in <a href="http://www.bookmyshow.com">bookmyshow.com</a>. I currently live in Bangalore. I was born and brought up in Villupuram-Tamilnadu. I graduated in Information technology from Anna university (MIT campus) Chennai. Sometimes I do freelance work too (checkout my <Link to="projects">projects section</Link>). I like to explore new technologies and latest gadgets. I spend my weekends  roaming around making new friends or trying out new things like this website (made this website out of sheer boredom). You can reach me out from <Link to="contact-info">here</Link>.
						</p>
						<h3 className="icon user">Get in touch with me</h3>
						<div className="contact-info">
							<p>Phone: +91-9952923967 (or) +91-8904561358</p>
							<p>Email: muralimano28@gmail.com</p>
							<div className="social">
								<span>
									<a href="https://www.facebook.com/murali.mano28">
										<img src="logo/facebook.svg" alt="facebook-link" />
									</a>
								</span>
								<span>
									<a href="https://twitter.com/muralimano28">
										<img src="logo/twitter.svg" alt="twitter-link" />
									</a>
								</span>
								<span>
									<a href="https://plus.google.com/u/0/116208385688469662040">
										<img src="logo/google.svg" alt="google-plus-link" />
									</a>
								</span>
								<span>
									<a href="https://github.com/muralimano28/">
										<img src="logo/github.svg" alt="github-link" />
									</a>
								</span>
								<span>
									<a href="https://in.linkedin.com/in/murali-manohar-58821257">
										<img src="logo/linkedin.svg" alt="linkedin-link" />
									</a>
								</span>
							</div>
						</div>
					</div>
				</section>);
	}
}

export default Home;
