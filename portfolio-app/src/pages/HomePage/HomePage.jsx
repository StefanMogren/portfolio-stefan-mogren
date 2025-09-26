import "./homePage.css";
import { projects } from "../../data/ProjectsData.js";

// ----- Pages -----
import Project from "../../components/Project/Project.jsx";
import { Link } from "react-router-dom";
import { toolsData } from "../../data/toolsData.js";
import Tool from "../../components/Tool/Tool.jsx";
import LinkedIn from "../../components/LinkedIn/LinkedIn.jsx";

function HomePage() {
	return (
		<main className='homePage'>
			<h1 className='homePage__title'>My portfolio</h1>
			<p></p>
			<p></p>
			<p>
				Hello. I'm Stefan Mogren, a student at Frontend development in Sweden.
			</p>
			<section>
				<h2>Every tool I've worked with</h2>
				<ul className='homePage__all-tools-list'>
					{toolsData.map((tool) => (
						<Tool tool={tool} key={tool} />
					))}
				</ul>
			</section>

			<img
				className='homePage__portrait-img'
				src='/assets/photo.jpg'
				alt='Portrait of Stefan'
			/>
			<p>stefan_mogren@hotmail.com</p>
			<LinkedIn />
			<section className='homePage__content'>
				<h2 className='homePage__sub-title'>Works I've done</h2>
				<ul className='homePage__project-list'>
					{projects.map((project, index) => (
						<Project content={project} key={index} />
					))}
				</ul>
			</section>
			<section>
				<p>
					Hello, I'm Stefan Mogren, a student and aspiring web developer both
					frontend and backend. I enjoy solving challenges through code, finding
					solutions to tricky issues and seeing how everything connects in the
					end.
				</p>
				<p>When I'm not working, I enjoy writing stories for others to read.</p>
				<p>Contact me at stefan_mogren@hotmail.com</p>
				<LinkedIn />
			</section>
		</main>
	);
}

export default HomePage;
