import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuotationGeneratorPage from './pages/QuotationGeneratorPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import { cabinets } from './components/data/database';

const App = () => {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50 px-4 font-sans">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<QuotationGeneratorPage cabinets={cabinets} />}
					/>
					<Route
						path="/products"
						element={<ProductPage cabinets={cabinets} />}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
