// import { SectionWrapper } from '../hoc';
// import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { AiOutlineDownload } from 'react-icons/ai';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css'; // Ensure this is imported
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

// const resumeLink =
// 	'https://raw.githubusercontent.com/dpmanek/Resume/master/Deep%20Manek.pdf';

// const Resume = () => {
// 	const [width, setWidth] = useState(1200);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		setWidth(window.innerWidth);
// 	}, []);

// 	const onLoadError = (error) => {
// 		console.error('Failed to load PDF file:', error.message);
// 		setError(error.message);
// 	};

// 	return (
// 		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
// 			<div className="flex justify-center mt-8">
// 				<a href={resumeLink} target="_blank" rel="noopener noreferrer">
// 					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
// 						<AiOutlineDownload />
// 						<span className="ml-2">Download CV</span>
// 					</button>
// 				</a>
// 			</div>

// 			{error ? (
// 				<div className="mt-8 text-white">Error loading PDF: {error}</div>
// 			) : (
// 				<div className="flex justify-center mt-8 overflow-hidden">
// 					<div className="max-w-full max-h-screen overflow-auto">
// 						<Document file={resumeLink} onLoadError={onLoadError}>
// 							<Page pageNumber={1} width={width > 786 ? 800 : width - 40} />
// 						</Document>
// 					</div>
// 				</div>
// 			)}

// 			<div className="flex justify-center mt-8">
// 				<a href={resumeLink} target="_blank" rel="noopener noreferrer">
// 					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
// 						<AiOutlineDownload />
// 						<span className="ml-2">Download CV</span>
// 					</button>
// 				</a>
// 			</div>
// 		</div>
// 	);
// };

// export default SectionWrapper(Resume, 'Resume');

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const resumeLink =
	'https://raw.githubusercontent.com/dpmanek/Resume/master/Deep%20Manek.pdf';

const Resume = () => {
	const [width, setWidth] = useState(1200);
	const [error, setError] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	const onLoadError = (error) => {
		console.error('Failed to load PDF file:', error.message);
		setError(error.message);
	};

	return (
		<div>
			<h3 className={styles.sectionSubText}>Feeling Old school</h3>
			<h3 className={styles.sectionHeadText}>PDF version.</h3>
			<div className="flex justify-center mt-8">
				<a href={resumeLink} target="_blank" rel="noopener noreferrer">
					<button className="bg-blue-950 hover:bg-tertiary text-white font-bold py-2 px-4 rounded flex items-center">
						<AiOutlineDownload />
						<span className="ml-2">Download CV</span>
					</button>
				</a>
			</div>

			{error ? (
				<div className="mt-8 text-white">Error loading PDF: {error}</div>
			) : (
				<div className="flex justify-center mt-8 overflow-hidden">
					<div className="max-w-full max-h-screen overflow-auto">
						<Document file={resumeLink} onLoadError={onLoadError}>
							<Page pageNumber={1} width={width > 786 ? 800 : width - 40} />
						</Document>
					</div>
				</div>
			)}

			<div className="flex justify-center mt-8">
				<a href={resumeLink} target="_blank" rel="noopener noreferrer">
					<button className="bg-blue-950 hover:bg-tertiary text-white font-bold py-2 px-4 rounded flex items-center">
						<AiOutlineDownload />
						<span className="ml-2">Download CV</span>
					</button>
				</a>
			</div>
		</div>
	);
};

export default SectionWrapper(Resume, 'resume');
