import React from 'react';

const CabinetQuotation = () => {
	return (
		<div className="p-6 bg-gray-50 min-h-screen">
			{/* Header */}
			<div className="text-center mb-8">
				<h1 className="text-xl font-bold italic">
					Hi-Gloss Finish Premium Cabinets
				</h1>
			</div>

			{/* Customer Information */}
			<div className="mb-6">
				<h3 className="text-base font-semibold">Date: Mobile:</h3>
				<h3 className="text-base font-semibold">Name:</h3>
				<h3 className="text-base font-semibold">Address:</h3>
				<h3 className="text-base font-semibold">
					Sub: Cost Estimate for The Cabinet & Interior Works in your Apartment.
				</h3>
			</div>

			{/* Greeting */}
			<p className="text-base mb-4">Dear Sir/Madam,</p>
			<p className="text-base mb-6">
				In response to your query regarding the captioned items, we are pleased
				to quote below our prices for the products as requested by you for your
				consideration.
			</p>

			{/* Summary Table */}
			<div className="overflow-x-auto mb-6">
				<table className="table-auto w-full border-collapse border border-gray-300">
					<thead>
						<tr className="bg-gray-200">
							<th className="border border-gray-300 p-2">SL NO</th>
							<th className="border border-gray-300 p-2">
								DESCRIPTION OF ITEM
							</th>
							<th className="border border-gray-300 p-2">AMOUNT TAKA</th>
							<th className="border border-gray-300 p-2">REMARKS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-gray-300 p-2 text-center">A</td>
							<td className="border border-gray-300 p-2 text-center">
								TOTAL AMOUNT FOR CABINETS & INTERIOR WORK
							</td>
							<td className="border border-gray-300 p-2"></td>
							<td className="border border-gray-300 p-2 text-left">
								Details bill are enclosed
							</td>
						</tr>
						<tr>
							<td className="border border-gray-300 p-2 text-center">B</td>
							<td className="border border-gray-300 p-2 text-center">
								Product & Materials Carrying Cost
							</td>
							<td className="border border-gray-300 p-2 text-center">
								5,500/-
							</td>
							<td className="border border-gray-300 p-2"></td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* Terms & Conditions */}
			<h2 className="text-lg font-semibold mb-4">Terms & Conditions:</h2>
			<ol className="list-decimal list-inside mb-6 space-y-2">
				<li>60% payment to be made in advance along with the Work Order.</li>
				<li>Rest 40% will be made after competition of 75% works.</li>
				<li>
					All Payments need to be paid through A/C Payee Cheque / DD / Bank
					Transfer / QR Pay.
				</li>
				<li>Delivery: Working days from receipt of confirmed Work Order.</li>
				<li>
					Offer Validity: This offer will remain valid for 5 (five) days from
					the date mentioned above.
				</li>
				<li>
					VAT & AIT: VAT & AIT are not included in the above quoted price.
				</li>
			</ol>

			{/* Notes */}
			<h3 className="text-lg font-semibold underline mb-2">Further Notes:</h3>
			<ul className="list-disc list-inside space-y-2 mb-6">
				<li>
					Electrical works, Ceiling Lights, Switch-sockets, Walls & Main Ceiling
					paints, Floor-others Cleaning are not included.
				</li>
				<li>
					Conceal Hinges / Chain Hinges are imported from China. Screw, Nail,
					Royal plug & other hardware will be local.
				</li>
				<li>
					Granite for countertop, Lights in cabinets, Kitchen Hood, Kitchen Hob
					is not included.
				</li>
			</ul>

			{/* Footer */}
			<footer className="mt-6">
				<p>
					Please feel free to call the undersigned should you require any
					further information and/or clarification. Thinking and assuring you of
					our best services at all times.
				</p>
				<p className="mt-4 font-bold">You’re sincerely,</p>
			</footer>
		</div>
	);
};

export default CabinetQuotation;
