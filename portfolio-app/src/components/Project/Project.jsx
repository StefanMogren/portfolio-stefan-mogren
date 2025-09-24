import "./project.css";

// ----- Components -----
import Tool from "../Tool/Tool.jsx";

// ----- Utils -----

function Project({ content }) {
	return (
		<li className='project'>
			{/* ----- Bildbehållaren för projektet ----- */}
			<div className='project__img-container'>
				<div className='project__img-bg-margin'>
					<img
						className='project__img'
						src={`/projectImg/${content.title}.jpg`}
						alt={content.title + " project page"}
					/>
				</div>
			</div>

			{/* ----- Textbehållaren angående projektet ----- */}
			<section className='project__text-container'>
				<h3 className='project__title'>{content.title}</h3>
				{/* content.description => p */}
				<p className='project__description'>{content.description}</p>

				{/* ----- Puntlistan med summeringar ----- */}
				<ul className='project__summary-list'>
					{content.summaries.map((summary, index) => (
						<li className='project__summary-item' key={index}>
							{summary}
						</li>
					))}
				</ul>

				{/* ----- Verktygen som använts ----- */}
				<ul className='project__tool-list'>
					{content.tools.map((tool) => (
						<Tool tool={tool} key={tool} />
					))}
				</ul>
			</section>
		</li>
	);
}

export default Project;
