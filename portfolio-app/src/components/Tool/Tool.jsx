import "./tool.css";

function Tool({ tool }) {
	return (
		<li className='project__tool-item'>
			<img
				className='project__tool-img'
				src={`/logos/${tool}.svg`}
				alt={`${tool} logo`}
			/>
			{tool}
		</li>
	);
}

export default Tool;
