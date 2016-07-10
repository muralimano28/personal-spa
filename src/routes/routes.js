"use strict";

// This is the routes file. I have defined default routes alone. You can add your own routes for later purpose.

import React from "react";
import { Router, Route, IndexRoute, useRouterHistory } from "react-router";
import { createHashHistory } from 'history'

// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

//Layouts
import MainLayout from "../layouts/main.jsx";

//Components
import ErrorPage from "../components/error-page.jsx";
import Home from "../components/home.jsx";
import Experiences from "../components/experiences.jsx";
import GithubRepos from "../components/github-repos.jsx";
import Projects from "../components/projects.jsx";
import Skills from "../components/skills.jsx";

const AppRoutes = React.createClass({
	render: function() {
		return (<Router history={appHistory}>
					<Route path="/" component={MainLayout}>
						<IndexRoute component={Home} />
						<Route path="skills" component={Skills} />
						<Route path="experiences" component={Experiences} />
						<Route path="projects" component={Projects} />
						{/*<Route path="github-repos" component={GithubRepos} />*/}
					</Route>
					<Route path="*" component={ErrorPage}/>
				</Router>);
	}
});

module.exports = AppRoutes;
