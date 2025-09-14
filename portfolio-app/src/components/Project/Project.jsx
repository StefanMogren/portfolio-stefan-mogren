import "./project.css";

// ----- Components -----
import Tool from "../Tool/Tool.jsx";

function Project({ content }) {
	return (
		<section>
			{/* Take content received and add an image plus text. */}
			{/* content.image => img */}
			<div>image here</div>
			<div>
				<h3>{content.title}</h3>
				{/* content.description => p */}
				<p>Short description of the project</p>
				<ul>
					{/* content.summaries.map(li) */}
					<li>One sentence summary</li>
					<li>One sentence summary</li>
					<li>One sentence summary</li>
				</ul>
				<ul>
					{content.tools.map((tool) => (
						<Tool tool={tool} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Project;
