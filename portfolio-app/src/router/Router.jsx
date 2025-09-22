import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----- Pages -----
import HomePage from "../pages/HomePage/HomePage.jsx";

// ----- Components -----
import Header from "../components/Header/Header.jsx";

export const Router = () => {
	return (
		<>
			<BrowserRouter>
				<section className='page-container'>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</section>
			</BrowserRouter>
		</>
	);
};
