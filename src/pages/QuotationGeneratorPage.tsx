import React, { useState, useEffect, useRef } from 'react';
import Form from '../components/Form';
import Quotation from '../components/Quotation';
import PrintableQuotation from '../components/PrintableQuotation';

interface Section {
	area: string;
	squareFootage: string;
	amount: number; // Added to calculate amount
	parts: any[];
}

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

const QuotationGeneratorPage = ({ cabinets }: { cabinets: any[] }) => {
	const [formData, setFormData] = useState<Quotation>({
		customerName: '',
		contact: '',
		address: '',
		products: [
			{
				selectedSeries: cabinets[0]?.series || '',
				selectedProduct: '',
				total: 0,
				sections: [],
			},
		],
	});

	const componentRef = useRef<HTMLDivElement>(null);

	const currentProduct = formData.products[formData.products.length - 1];
	const seriesOptions = cabinets.map(series => series.series);
	const productOptions =
		cabinets
			.find(series => series.series === currentProduct.selectedSeries)
			?.products.map(product => product.title) || [];
	const sections =
		cabinets
			.find(series => series.series === currentProduct.selectedSeries)
			?.products.find(
				product => product.title === currentProduct.selectedProduct
			)?.sections || [];

	const addProduct = () => {
		if (currentProduct.selectedProduct) {
			setFormData(prev => ({
				...prev,
				products: [
					...prev.products,
					{
						selectedSeries: cabinets[0]?.series || '',
						selectedProduct: '',
						total: 0,
						sections: [],
					},
				],
			}));
		}
	};

	const calculateTotal = (updatedSections: Section[]) => {
		const total = updatedSections.reduce((sum, section) => {
			console.log(section);
			return sum + (section.amount || 0); // Sum the calculated amounts
		}, 0);

		setFormData(prev => {
			const updatedProducts = [...prev.products];
			updatedProducts[updatedProducts.length - 1] = {
				...updatedProducts[updatedProducts.length - 1],
				sections: updatedSections,
				total,
			};
			return { ...prev, products: updatedProducts };
		});
	};

	useEffect(() => {
		if (currentProduct.selectedProduct) {
			const selectedSections =
				cabinets
					.find(series => series.series === currentProduct.selectedSeries)
					?.products.find(
						product => product.title === currentProduct.selectedProduct
					)
					?.sections.map((section: any) => {
						const ratePerSqFt = section.parts[0]?.ratePerSqFt || 0;
						return {
							area: section.area,
							squareFootage: '',
							amount: 0, // Initialize amount
							parts: section.parts,
							ratePerSqFt,
						};
					}) || [];

			setFormData(prev => {
				const updatedProducts = [...prev.products];
				updatedProducts[updatedProducts.length - 1] = {
					...updatedProducts[updatedProducts.length - 1],
					sections: selectedSections,
				};
				return { ...prev, products: updatedProducts };
			});
		}
	}, [currentProduct.selectedProduct]);

	const updateSquareFootage = (index: number, squareFootage: string) => {
		setFormData(prev => {
			const updatedProducts = [...prev.products];
			const lastProduct = updatedProducts[updatedProducts.length - 1];
			const section = lastProduct.sections[index];

			const amount = parseFloat(squareFootage) * section.ratePerSqFt || 0;

			const updatedSection = { ...section, squareFootage, amount };
			lastProduct.sections[index] = updatedSection;

			calculateTotal(lastProduct.sections);
			return { ...prev, products: updatedProducts };
		});
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="max-h-[85vh] overflow-y-auto scrollbar-thin">
				<Form
					quotation={formData}
					setQuotation={setFormData}
					addProduct={addProduct}
					calculateTotal={calculateTotal}
					seriesOptions={seriesOptions}
					productOptions={productOptions}
					sections={sections}
					componentRef={componentRef}
					updateSquareFootage={updateSquareFootage}
				/>
			</div>

			<div className="overflow-x-auto scrollbar-thin">
				<div className="flex space-x-4">
					{formData.products.length > 0 &&
						formData.products.map((product, index) => (
							<div
								key={index}
								className="bg-white p-4 shadow-md rounded-md min-w-[calc(80vh * (210 / 297))]"
							>
								<Quotation quotationData={product} />
							</div>
						))}
				</div>
			</div>

			<div style={{ display: 'none' }}>
				<PrintableQuotation
					componentRef={componentRef}
					quotationData={formData.products}
				/>
			</div>
		</div>
	);
};

export default QuotationGeneratorPage;