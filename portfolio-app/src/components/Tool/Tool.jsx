import reactLogo from "../../assets/react.svg";

function Tool({ tool }) {
	return (
		<li>
			<img src={reactLogo} alt={`${tool} logo`} />
			{tool}
		</li>
	);
}

export default Tool;
