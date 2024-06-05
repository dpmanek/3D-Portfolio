import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I am a Full Stack Developer with a passion for creating web applications
				and websites. I have experience in developing web applications using
				React, Node.js, Express, and MongoDB. I am also familiar with other
				technologies such as TypeScript, GraphQL, and Firebase. I am always
				eager to learn new technologies and improve my skills.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<></>
				))}
			</div>
		</>
	);
};

export default About;
