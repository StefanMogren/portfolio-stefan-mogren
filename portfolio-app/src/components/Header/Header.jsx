import { Link } from "react-router-dom";
import "./header.css";

function Header() {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<ul className='header__nav-list'>
					<li className='header__nav-item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='header__nav-item'>
						<Link to='/'>Projects</Link>
					</li>
					<li className='header__nav-item'>
						<Link to='/'>About me</Link>
					</li>
					<li className='header__nav-item'>
						<Link to='/'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
