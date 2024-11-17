const ProductPage = ({ cabinets }) => {
	return (
		<div className="p-6 bg-white shadow-md rounded-md">
			<h1 className="text-2xl font-bold mb-4">All Products</h1>
			{cabinets.map(series => (
				<div key={series.series} className="mb-6">
					<h2 className="text-xl font-semibold mb-2">{series.series}</h2>
					<table className="table-auto w-full border-collapse border border-gray-300">
						<thead>
							<tr className="bg-gray-200">
								<th className="border border-gray-300 px-4 py-2">Product</th>
								<th className="border border-gray-300 px-4 py-2">Area</th>
								<th className="border border-gray-300 px-4 py-2">
									Rate (Tk/Sqft)
								</th>
							</tr>
						</thead>
						<tbody>
							{series.products.map(product =>
								product.sections.map((section, index) => (
									<tr
										key={`${product.title}-${index}`}
										className="hover:bg-gray-100"
									>
										{/* Display Product Title only for the first section */}
										{index === 0 ? (
											<td
												className="border border-gray-300 px-4 py-2 font-semibold"
												rowSpan={product.sections.length}
											>
												{product.title}
											</td>
										) : null}
										<td className="border border-gray-300 px-4 py-2">
											{section.area}
										</td>
										<td className="border border-gray-300 px-4 py-2 text-center">
											{section.parts[0]?.ratePerSqFt || 0}
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
};

export default ProductPage;
