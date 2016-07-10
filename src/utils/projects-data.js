"use strict";

const ProjectsData = [{
	id: "project-1",
	title: "My personal website",
	type: "PERSONAL",
	company: null,
	companyLink: null,
	projectLink: "http://muralimanohar.in",
	githubLink: "https://github.com/muralimano28/personal-spa.git",
	technology: "HTML5 | CSS3 | Javascript (ES6) | React.js | Web design | Mobile responsive",
	description: "Developed a personal website with HTML5, CSS3, Javascript (ES6) and React.js to showcase my projects and experience.",
	tags: ["Personal"]
},
{
	id: "project-2",
	title: "DIY - Manage",
	type: "OFFICIAL",
	company: "Bookmyshow.com",
	companyLink: "https://www.bookmyshow.com",
	projectLink: "https://diy-in.bookmyshow.com/manage",
	githubLink: null,
	technology: "HTML5 | CSS3 | Javascript (ES5 & ES6) | React.js | Web design | Go | MongoDB | RethinkDB | Mobile responsive",
	description: "DIY - Do it yourself is a platform to create an event and sell tickets for that event. It provides end-to-end solution from creating microsite (Single page app) for the event to getting feedback from event attendees.",
	tags: ["Bookmyshow"]
},
{
	id: "project-3",
	title: "DIY - Microsite",
	type: "OFFICIAL",
	company: "Bookmyshow.com",
	companyLink: "https://www.bookmyshow.com",
	projectLink: "https://diy-in.bookmyshow.com",
	githubLink: null,
	technology: "HTML5 | CSS3 | Javascript (ES5 & ES6) | React.js | Web design | Go | MongoDB | RethinkDB | Mobile responsive",
	description: "DIY - Microsite is a themed page for showcasing event information. The information in microsite comes from DIY-Manage platform, which is given by the user while creating the event.",
	tags: ["Bookmyshow"]
},
{
	id: "project-4",
	title: "DIY - Discovery",
	type: "OFFICIAL",
	company: "Bookmyshow.com",
	companyLink: "https://www.bookmyshow.com",
	projectLink: "https://diy-in.bookmyshow.com",
	githubLink: null,
	technology: "HTML5 | CSS3 | Javascript (ES5 & ES6) | React.js | Web design | Go | MongoDB | RethinkDB | Mobile responsive",
	description: "DIY - Discovery is an events listing page. This page will list all events that are published by the user.",
	tags: ["Bookmyshow"]
},
{
	id: "project-5",
	title: "Mieteam",
	type: "FREELANCE",
	company: null,
	companyLink: null,
	projectLink: "http://mieteam.com",
	githubLink: null,
	technology: "HTML5 | CSS3 | Javascript (ES5) | React.js | Go | MongoDB | Mobile responsive | Web design",
	description: "Developed a responsive website, that helps customer to hire right professionals for their work at right price.",
	tags: ["Freelance"]
},
{
	id: "project-6",
	title: "Puppy pull",
	type: "PERSONAL",
	company: null,
	companyLink: null,
	projectLink: null,
	githubLink: "https://github.com/muralimano28/puppypull.git",
	technology: "HTML | Bootstrap | Javascript (ES5) | Angular.js | Mobile responsive",
	description: "Puppy pull is a simple web application that fetches photos of cute puppies from the flickr and displays it on a webpage. The visitors to the page can upvote and downvote an image. They can sort the images according to most voted one. Every image will display the number of votes it has received. It uses goflickr app that I created for back-end.",
	tags: ["Personal", "Not active"]
},
{
	id: "project-7",
	title: "Goflickr",
	type: "PERSONAL",
	company: null,
	companyLink: null,
	projectLink: null,
	githubLink: "https://github.com/muralimano28/goflickr.git",
	technology: "Go | MongoDB | FlickrAPI",
	description: "Goflickr is an API which fetches images of puppies from flickr and stores them in MongoDB and serves it back to front-end application.",
	tags: ["Personal", "Not active"]
},
{
	id: "project-8",
	title: "Real-time locator with docking using google maps API for IOT",
	type: "OFFICIAL",
	company: "Aricent",
	companyLink: "http://www.aricent.com",
	projectLink: null,
	githubLink: null,
	technology: "HTML | Bootstrap | Javascript (ES5) | Angular.js | GoogleMaps API | .NET | Mobile responsive",
	description: "It is a single page application that get latitude and longitude info from server and places a marker in google maps in real time.",
	tags: ["Aricent"]
},
{
	id: "project-9",
	title: "TFTP - Trivial file transfer protocol",
	type: "OFFICIAL",
	company: "Aricent",
	companyLink: "http://www.aricent.com",
	projectLink: null,
	githubLink: null,
	technology: "C | SVN | RFC 1305",
	description: "Developed a C application to transfer small files from the server and to the server.",
	tags: ["Aricent"]
}
];

export default ProjectsData;
