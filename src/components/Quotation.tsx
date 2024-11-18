import React from 'react';
import QuotationTable from './QuotationTable';
import { Section } from './data/database';

interface QuotationData {
	serise: string;
	selectedProduct: string;
	sections: Section[];
	totalAmount: string;
}

interface QuotationProps {
	quotationData: QuotationData;
}

const Quotation: React.FC<QuotationProps> = ({ quotationData }) => {
	return (
		<div className="quotation-container-web bg-pad bg-cover bg-no-repeat mx-auto relative">
			<div className="quotation-table pt-14">
				<QuotationTable className="" data={quotationData} />
			</div>

			{/* Sticky Footer Section */}
			<footer
				className="absolute bottom-10 left-0 right-0 "
				style={{ paddingBottom: '1rem' }}
			>
				<div className="flex justify-between px-8 ">
					<div>
						<p className="footer-font text-sm font-bold">
							Signature of Consultant:
						</p>
						<p className="footer-font text-sm">________________________</p>
					</div>
					<div>
						<p className="footer-font text-sm font-bold">Client's Approval:</p>
						<p className="footer-font text-sm">________________________</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Quotation;
