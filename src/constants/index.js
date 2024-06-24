import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	BET,
	Instabuzz,
	Rentpipe,
	threejs,
	atlast,
	ltimindtree,
	stevens,
	websitelink,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
	{
		id: 'resume',
		title: 'Resume',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Front End Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Associate Data Scientist',
		company_name: 'LTIMindtree',
		icon: ltimindtree,
		iconBg: '#383E56',
		date: 'March 2020 - December 2021',
		points: [
			"Enhanced user accessibility for the Ministry of India's NIIP page by developing a Full Stack application, resulting in a 20% increase in user engagement and 30% faster page load times",
			'Facilitated an in-depth platform comparison for Johnson Controls International by constructing two Full Stack chatbots, leading to a 25% surge in query processing accuracy and a 30% rise in user adoption rate',
			'Improved chatbot efficiency by designing a MERN stack dashboard, achieving a 40% reduction in response time and a 50% increase in customer satisfaction',
			'afeguarded web architecture by adhering to best security practices, leading to a 60% reduction in vulnerability incidents and bolstering data protection across platforms',
		],
	},
	{
		title: ' Graduate Course Teaching Assistant',
		company_name: 'Stevens Institute of Technology',
		icon: stevens,
		iconBg: '#383E56',
		date: 'Sept 2022 - May 2023',
		points: [
			'Course Assistant for Web programming II, Tutored, graded, and devised homework assignments for a class of 400+ students.',
			'Conducted office hours to assist students with problem solving course material and supervised Slack channel.',
		],
	},
	{
		title: 'Software Developer',
		company_name: 'At Last Sportswear, Inc',
		icon: atlast,
		iconBg: '#E6DEDD',
		date: 'May 2023 - Present',
		points: [
			'Transformed the "Beach Lunch Lounge" site using ReactJS, leading to a redesigned architecture and a 30% increase in sales.',
			'Implemented E2E , component and unit testing using cypress open-source software.',
			'Deployed REST APIs with Node.js and Express.js to enhance website efficiency, resulting in seamless ERP integration and a 20%speed boost. Migrated data to MongoDB, ensuring a 50% reduction in data retrieval times and enhanced data efficiency.',
			'Optimized website performance by 15% through AWS load balancing services, ensuring optimal traffic management.',
			'Developed a REST API for weekly campaigns using Node.js, Express.js, and JWT, leading to a 25% increase in email open rates',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I had the pleasure of working with Deep on several projects, and his expertise in web development is truly outstanding. Deep combines technical proficiency with creativity, resulting in innovative solutions that exceed expectations. His dedication and attention to detail have significantly enhanced our web presence and user experience.',
		name: "Kevin D'sa",
		designation: 'Full Stack Developer',
		company: 'Character Strong',
		image:
			'https://media.licdn.com/dms/image/D4E03AQFlg8pIrXcp2w/profile-displayphoto-shrink_200_200/0/1705980131880?e=1724284800&v=beta&t=y_RIEShpwavc5pVJAIcfFLqO7z5U6YiAgBk6tldgdIQ',
	},
	{
		testimonial:
			"Deep is very dynamic person and a great asset to have on the team. He was open to new challenges and learning new technologies. I've been happy to see him grow professionally.",
		name: 'Nirav Jain',
		designation: 'Full Stack Engineer II',
		company: 'Geico',
		image: 'https://raw.githubusercontent.com/dpmanek/images/main/nirav2.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'BET - Budget Expense Tracker',
		description:
			'Expense Tracking made easy.Stay on top of your spending with Expense Tracker. An online tracking tool to help you better understand your habits and make measurable change.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: BET,
		source_code_link: 'https://github.com/dpmanek/BET-Budget-Expense-Tracker',
		demo_link: 'https://budgetexpensetracker.netlify.app/',
	},
	{
		name: 'Rent Pipe',
		description:
			'A web application that allows users to find properties that are listed for Sale or Rent in their desired locations. his web application also allows users to create their own listings if they desire to Sell or Rent their house.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'oauth',
				color: 'pink-text-gradient',
			},
		],
		image: Rentpipe,
		source_code_link: 'https://github.com/dpmanek/RentPipe',
		demo_link: 'https://rentpipe.netlify.app/',
	},
	{
		name: 'Instabuzz',
		description: `Instabuzz is a platform for sharing memories and showcasing talent, mirroring Instagram's key features. Users can post single or multiple images with descriptions and locations. They can also explore, comment on, and like public posts from other users.`,
		tags: [
			{
				name: 'redis',
				color: 'blue-text-gradient',
			},
			{
				name: 'ImageMagick',
				color: 'green-text-gradient',
			},
			{
				name: 'AmazonS3',
				color: 'pink-text-gradient',
			},
		],
		image: Instabuzz,
		source_code_link: 'https://github.com/dpmanek/CS554-TeamMavericks-project/',
	},
];

export { services, technologies, experiences, testimonials, projects };
