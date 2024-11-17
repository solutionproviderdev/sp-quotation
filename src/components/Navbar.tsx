import { Link } from 'react-router-dom';
import logo from '../assets/sp_logo.png';

const Navbar = () => {
	return (
		<nav className="bg-white border-b border-gray-200 shadow-sm p-4">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<div className="text-gray-800 text-xl font-bold">
					<Link to="/" className="flex items-center hover:text-gray-600">
						<img
							src={logo}
							alt="Company Logo"
							className="h-10 w-auto"
						/>
					</Link>
				</div>

				{/* Navigation Links */}
				<ul className="flex space-x-4">
					<li>
						<Link
							to="/"
							className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
						>
							Quotation Generator
						</Link>
					</li>
					<li>
						<Link
							to="/products"
							className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
						>
							All Products
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
