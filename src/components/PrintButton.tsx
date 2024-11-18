import React, { RefObject } from 'react';
import { useReactToPrint } from 'react-to-print';

interface PrintButtonProps {
	componentRef: RefObject<HTMLDivElement>;
}

const PrintButton: React.FC<PrintButtonProps> = ({ componentRef }) => {
	const handlePrint = useReactToPrint({
		// content: () => componentRef.current, // Correctly pass the ref to the content function
		contentRef: componentRef, // Pass the ref to the contentRef prop
		onBeforePrint: async () => {
			console.log('Preparing to print...');
			return Promise.resolve();
		},
		onAfterPrint: () => console.log('Print completed'),
	});

	return (
		<button
			className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
			onClick={event => {
				event.preventDefault();
				handlePrint();
			}}
		>
			Print Quotation
		</button>
	);
};export default PrintButton;
