import "./homePage.css";
import { projects } from "../../data/ProjectsData.js";

// ----- Pages -----
import Project from "../../components/Project/Project.jsx";

function HomePage() {
	return (
		<main className='homePage'>
			<h1 className='homePage__title'>My portfolio</h1>

			<section className='homePage__content'>
				<h2 className='homePage__sub-title'>Work I've done</h2>
				<ul className='homePage__project-list'>
					{projects.map((project, index) => (
						<Project content={project} key={index} />
					))}
				</ul>
				{/* Map through array. For each item, create a Project component with content. */}
			</section>
		</main>
	);
}

export default HomePage;
