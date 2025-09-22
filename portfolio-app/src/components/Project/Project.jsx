import "./project.css";

// ----- Components -----
import Tool from "../Tool/Tool.jsx";

function Project({ content }) {
	return (
		<li className='project'>
			{/* Take content received and add an image plus text. */}
			{/* content.image => img */}
			<div>image here</div>
			<section className='project__text-container'>
				<h3 className='project__title'>{content.title}</h3>
				{/* content.description => p */}
				<p className='project__description'>Short description of the project</p>
				<ul className='project__summary-list'>
					{/* content.summaries.map(li) */}
					{content.summaries.map((summary, index) => (
						<li className='project__summary-item' key={index}>
							{summary}
						</li>
					))}
				</ul>
				<ul className='project__tool--list'>
					{content.tools.map((tool) => (
						<Tool tool={tool} key={tool} />
					))}
				</ul>
			</section>
		</li>
	);
}

export default Project;
