import React, { RefObject } from 'react';
import QuotationTable from './QuotationTable';
import { Section } from './data/database';

// interface Item {
// 	material: string;
// 	description: string;
// }

// interface Part {
// 	items: Item[];
// 	quantity: string;
// 	unit: string;
// 	ratePerSqFt: number;
// 	amount: string;
// }

interface QuotationData {
	serise: string;
	selectedProduct: string;
	sections: Section[];
	totalAmount: string;
}

interface PrintableQuotationProps {
	quotationData: QuotationData[];
	componentRef: RefObject<HTMLDivElement>;
}

const PrintableQuotation: React.FC<PrintableQuotationProps> = ({
	quotationData,
	componentRef,
}) => {
	return (
		<div className="" ref={componentRef}>
			{quotationData.map((product, index) => (
				<div
					key={index}
					className="bg-pad mx-auto pt-32 px-4 mb-4"
					style={{
						width: '210mm',
						height: '297mm',
						pageBreakAfter: 'always',
					}}
				>
					<QuotationTable data={product} />
					<footer className="absolute bottom-20 left-0 right-0 px-8">
						<div className="flex justify-between">
							<div>
								<p className="font-bold text-sm">Signature of Consultant:</p>
								<p>________________________</p>
							</div>
							<div>
								<p className="font-bold text-sm">Client's Approval:</p>
								<p>________________________</p>
							</div>
						</div>
					</footer>
				</div>
			))}
		</div>
	);
};

export default PrintableQuotation;
