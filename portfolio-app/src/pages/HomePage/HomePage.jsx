import "./homePage.css";
import { projects } from "../../data/ProjectsData.js";

// ----- Pages -----
import Project from "../../components/Project/Project.jsx";
import { Link } from "react-router-dom";
import { toolsData } from "../../data/toolsData.js";
import Tool from "../../components/Tool/Tool.jsx";
import ContactInfo from "../../components/ContactInfo/ContactInfo.jsx";

function HomePage() {
	return (
		<main className='homePage'>
			{/* ----- Intro ----- */}
			<h1 className='homePage__title'>My portfolio</h1>
			<p>
				Hello. I'm Stefan Mogren,
				<img
					className='homePage__portrait-img'
					src='/assets/photo.jpg'
					alt='Portrait of Stefan'
				/>{" "}
				a student at Frontend development in Sweden.
			</p>
			<ContactInfo />

			{/* ----- My Tools ----- */}
			<section className='homePage__all-tools-container'>
				<h2 className='homePage__all-tools-title'>
					Every tool I've worked with
				</h2>
				<ul className='homePage__all-tools-list'>
					{toolsData.map((tool) => (
						<Tool tool={tool} key={tool} />
					))}
				</ul>
			</section>

			{/* ----- Projects ----- */}
			<section className='homePage__content'>
				<h2 className='homePage__sub-title'>Works I've done</h2>
				<ul className='homePage__project-list'>
					{projects.map((project, index) => (
						<Project content={project} key={index} />
					))}
				</ul>
			</section>

			{/* ----- About me ----- */}
			<section className='homePage__about-me'>
				<p className=''>
					Hello, I'm Stefan Mogren, a student and aspiring web developer both
					frontend and backend. I enjoy solving challenges through code, finding
					solutions to tricky issues and seeing how everything connects in the
					end. Learning new things opens up opportunities for even more
					possibilities and solutions.
				</p>
				<p>
					When I'm not working, I enjoy writing stories for others to read.
					Figuring out interesting and dramatic encounters for my characters is
					fun!
				</p>
				<p>I believe in a healthy and balanced lifestyle</p>

				{/* ----- Contact ----- */}

				<ContactInfo />
			</section>
		</main>
	);
}

export default HomePage;
