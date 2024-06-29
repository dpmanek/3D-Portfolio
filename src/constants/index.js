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
	docker,
	BET,
	Instabuzz,
	Rentpipe,
	threejs,
	atlast,
	ltimindtree,
	stevens,
	genpact,
	wayfair,
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
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Software Engineer',
		company_name: ' Wayfair',
		icon: wayfair,
		iconBg: '#E6DEDD',
		date: '05/2023 – Present',
		points: [
			`Developed a Logistics Planning solution for a critical tier-1 service on AWS, aimed at revolutionizing logistics
planning and navigation efficiency worldwide.
`,
			`Led service infrastructure in a novel area within the CI/CD pipeline, effectively driving needs for raised package
delivery abilities this required S3 for object storage, CloudWatch for monitoring, and IAM for access regime.
`,
			`Leveraged MongoDB for robust data storage, utilizing its flexible data model and aggregation framework to
handle high volumes of logistics data, ensure reliability, and provide efficient data management.
`,
			`Utilized Express.js to build the server-side API, leveraging its middleware capabilities, error-handling
mechanisms, and optimized interactions to create a cohesive and well-structured application.
`,
			`Employed React.js to develop the user interface, using its component-based architecture, virtual DOM, and state
management features to ensure a smooth, responsive, and integrated user experience.
`,
			`Used Node.js as the runtime environment, operating its asynchronous programming model, vast ecosystem, and
optimized performance to create a cohesive and efficient system.`,
		],
	},
	{
		title: 'Software Developer',
		company_name: 'Genpact',
		icon: genpact,
		iconBg: '#383E56',
		date: '01/2020 – 11/2021',
		points: [
			`Developed a scalable healthcare management system using Node.js and React.js, handling over 100,000 patient
			records and easing efficient patient regimes and healthcare provider alliances via cutting-edge technologies.
			`,
			`Enforced authentication and authorization mechanisms using JSON Web Tokens and OAuth2, driving millions of
			requests daily and securing access to liable healthcare data while meeting regulatory compliance norms.
			`,
			`Designed and optimized MongoDB databases capable of storing up to 10 terabytes of data, enhancing system
			performance, scalability, and data integrity, and ensuring the healthcare system maintains 99.99% uptime and
			scalability across diverse user bases by leveraging AWS services such as EC2, RDS, and S3 for cloud deployment.
			`,
			`Collaborated closely with a multidisciplinary team of 15+ members, utilizing Git for version control and JIRA for
			project management, ensuring smooth workflow, effective communication, and timely delivery of features.
			`,
			`Implemented Docker for containerization, enabling deployment, scalability, and resource efficiency of the
			healthcare management system across various environments, including development, testing, and production.`,
		],
	},
	{
		title: 'Software Engineer',
		company_name: 'LTIMindtree',
		icon: ltimindtree,
		iconBg: '#383E56',
		date: '05/2018 – 12/2019 ',
		points: [
			"Enhanced user accessibility for the Ministry of India's NIIP page by developing a full stack application, resulting in a 20% increase in user engagement and 30% faster page load times",
			'Facilitated an in-depth platform comparison for Johnson Controls International by constructing two Full Stack chatbots, leading to a 25% surge in query processing accuracy and a 30% rise in user adoption rate',
			'Improved chatbot efficiency by designing a MERN stack dashboard, achieving a 40% reduction in response time and a 50% increase in customer satisfaction',
			'Safeguarded web architecture by adhering to best security practices, leading to a 60% reduction in vulnerability incidents and bolstering data protection across platforms',
			'Cooperated with cross-functional teams to analyze requirements, create technical specifications, and implement innovative software resolutions that meet business objectives.',
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
			'Deep Manek personally helped me resolve a critical bug in our Node.js project, significantly improving our delivery timeline and overall outcome. His technical acumen and problem-solving skills are outstanding. Highly recommend!',
		name: 'Marvin Patel',
		designation: 'Software Developer II',
		company: 'Global Payments',
		image: 'https://raw.githubusercontent.com/dpmanek/images/main/Marvin.jpg',
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
