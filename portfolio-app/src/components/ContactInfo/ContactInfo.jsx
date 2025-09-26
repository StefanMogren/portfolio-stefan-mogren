import "./contactInfo.css";
import LinkedIn from "../../components/LinkedIn/LinkedIn.jsx";

function ContactInfo() {
	return (
		<address className='contact-info'>
			<a
				className='contact-info__email'
				href='mailto:stefan_mogren@hotmail.com'>
				stefan_mogren@hotmail.com
			</a>
			<LinkedIn />
		</address>
	);
}

export default ContactInfo;
