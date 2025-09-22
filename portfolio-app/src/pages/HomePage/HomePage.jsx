import "./homePage.css";
import { projects } from "../../data/Projects.js";

// ----- Pages -----
import Project from "../../components/Project/Project.jsx";

function HomePage() {
	return (
		<main>
			<h1>My portfolio</h1>

			<section>
				<h2>Work I've done</h2>
				<ul>
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
