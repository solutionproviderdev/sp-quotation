import React, { useState } from 'react';
import PrintButton from './PrintButton';

import { Section } from './data/database';

interface Product {
	selectedSeries: string;
	selectedProduct: string;
	total: number;
	sections: Section[];
}

interface Quotation {
	customerName: string;
	contact: string;
	address: string;
	products: Product[];
}

interface FormProps {
	quotation: Quotation;
	setQuotation: React.Dispatch<React.SetStateAction<Quotation>>;
	addProduct: () => void;
	calculateTotal: (updatedSections: Section[], productIndex: number) => void;
	seriesOptions: string[];
	productOptions: string[];
	sections: Section[];
	componentRef: React.RefObject<HTMLDivElement>;
}

const Form: React.FC<FormProps> = ({
	quotation,
	setQuotation,
	addProduct,
	calculateTotal,
	seriesOptions,
	productOptions,
	sections,
	componentRef,
}) => {
	const [showCustomerDetails, setShowCustomerDetails] = useState(false);

	// Handle updates to customer details
	const handleCustomerChange = (field: string, value: string) => {
		setQuotation(prev => ({ ...prev, [field]: value }));
	};

	// Handle updates to a product's series or product
	const handleProductChange = (
		productIndex: number,
		field: keyof Product,
		value: string
	) => {
		setQuotation(prev => {
			const updatedProducts = [...prev.products];
			const selectedProduct = updatedProducts[productIndex];
			selectedProduct[field] = value as never;

			// Reset sections and total when series or product changes
			if (field === 'selectedSeries' || field === 'selectedProduct') {
				selectedProduct.sections = [];
				selectedProduct.total = 0;
			}

			return { ...prev, products: updatedProducts };
		});
	};

	// Handle updates to sections (square footage input)
	const handleSectionChange = (
		productIndex: number,
		sectionIndex: number,
		value: string
	) => {
		setQuotation(prev => {
			const updatedProducts = [...prev.products];
			const selectedProduct = updatedProducts[productIndex];

			// Update the square footage
			selectedProduct.sections[sectionIndex].squareFootage = value;

			// Calculate the amount for this section
			const ratePerSqFt = selectedProduct.sections[sectionIndex].ratePerSqFt;
			const squareFootage = parseFloat(value) || 0;
			const amount = squareFootage * ratePerSqFt;

			// Set the amount
			selectedProduct.sections[sectionIndex].amount = amount;

			// Recalculate total for this product
			calculateTotal(selectedProduct.sections, productIndex);

			return { ...prev, products: updatedProducts };
		});
	};

	return (
		<form
			className="p-3 bg-gray-50 shadow-md rounded-md text-sm"
			onSubmit={e => e.preventDefault()}
		>
			<h2 className="text-lg font-bold mb-3 text-gray-700">Quotation Form</h2>

			{/* Customer Details Accordion */}
			<div className="mb-4">
				<button
					type="button"
					className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md focus:outline-none hover:bg-gray-200"
					onClick={() => setShowCustomerDetails(!showCustomerDetails)}
				>
					<span>Customer Details</span>
					<span>{showCustomerDetails ? '-' : '+'}</span>
				</button>

				{showCustomerDetails && (
					<div className="mt-4 space-y-3">
						<div>
							<label className="block font-medium text-gray-600">
								Customer Name
							</label>
							<input
								type="text"
								className="w-full p-2 border rounded-md text-sm"
								value={quotation.customerName}
								onChange={e =>
									handleCustomerChange('customerName', e.target.value)
								}
							/>
						</div>
						<div>
							<label className="block font-medium text-gray-600">Contact</label>
							<input
								type="text"
								className="w-full p-2 border rounded-md text-sm"
								value={quotation.contact}
								onChange={e => handleCustomerChange('contact', e.target.value)}
							/>
						</div>
						<div>
							<label className="block font-medium text-gray-600">Address</label>
							<input
								type="text"
								className="w-full p-2 border rounded-md text-sm"
								value={quotation.address}
								onChange={e => handleCustomerChange('address', e.target.value)}
							/>
						</div>
					</div>
				)}
			</div>

			{/* Product Selection and Editing */}
			{quotation.products.map((product, productIndex) => (
				<div key={productIndex} className="border-t mt-4 pt-4">
					<h3 className="text-base font-semibold mb-3 text-gray-700">
						Product {productIndex + 1}
					</h3>
					<div className="flex justify-center items-center space-x-3 mb-4">
						<div className="flex-1">
							<label className="block font-medium text-gray-600">
								Select Series
							</label>
							<select
								className="w-full p-2 border rounded-md text-sm"
								value={product.selectedSeries}
								onChange={e =>
									handleProductChange(
										productIndex,
										'selectedSeries',
										e.target.value
									)
								}
							>
								{seriesOptions.map(series => (
									<option key={series} value={series}>
										{series}
									</option>
								))}
							</select>
						</div>
						<div className="flex-1">
							<label className="block font-medium text-gray-600">
								Select Product
							</label>
							<select
								className="w-full p-2 border rounded-md text-sm"
								value={product.selectedProduct}
								onChange={e =>
									handleProductChange(
										productIndex,
										'selectedProduct',
										e.target.value
									)
								}
							>
								<option value="">Select a product</option>
								{productOptions.map(option => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Sections */}
					<div className="flex justify-center items-center space-x-3 mb-4">
						{product.sections.map((section, sectionIndex) => (
							<div
								key={sectionIndex}
								className="flex flex-1 flex-col space-y-1 mb-3"
							>
								<label className="block font-medium text-gray-600">
									{section.area} (Rate:{' '}
									{sections[sectionIndex]?.parts[0]?.ratePerSqFt || 0} Tk/Sqft)
								</label>
								<input
									type="number"
									className="w-full p-2 border rounded-md text-sm"
									placeholder="Enter square footage"
									value={section.squareFootage || ''}
									onChange={e =>
										handleSectionChange(
											productIndex,
											sectionIndex,
											e.target.value
										)
									}
								/>
							</div>
						))}
					</div>
				</div>
			))}

			<div className="flex items-center justify-between">
				{/* Add Product Button */}
				<button
					type="button"
					className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
					onClick={addProduct}
				>
					Add Product
				</button>

				{/* Print Button */}
				<div className="mt-4">
					<PrintButton componentRef={componentRef} />
				</div>
			</div>
		</form>
	);
};

export default Form;
