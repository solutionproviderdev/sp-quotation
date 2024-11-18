import React from 'react';
import { Section } from './data/database';

interface QuotationData {
	serise: string;
	selectedProduct: string;
	totalAmount: string;
	sections: Section[];
}

interface QuotationTableProps {
	className?: string;
	data: QuotationData;
}

const QuotationTable: React.FC<QuotationTableProps> = ({ className, data }) => {
	return (
		<div className={`${className} mx-auto p-4`}>
			{/* Series Header */}
			<header className="flex items-center justify-center mb-4">
				<p className="serise-font tracking-wide p-2 font-bold text-base bg-blue-100 rounded-lg w-max">
					{data.serise}
				</p>
			</header>

			{/* Table Header */}
			<header className="text-center p-2 font-bold text-sm bg-green-100">
				<p className="header-font tracking-wide">{data.selectedProduct}</p>
			</header>

			{/* Table */}
			<table className="w-full border-collapse border border-gray-300 text-[8px]">
				<thead className="bg-gray-200">
					<tr>
						<th className="border border-gray-300 p-2 text-center w-[5%]">
							SL
						</th>
						<th className="border border-gray-300 p-2 text-left w-[50%]">
							DESCRIPTION OF ITEMS
						</th>
						<th className="border border-gray-300 p-2 text-center w-[10%]">
							QUANTITY
						</th>
						<th className="border border-gray-300 p-2 text-center w-[10%]">
							UNIT
						</th>
						<th className="border border-gray-300 p-2 text-center w-[10%]">
							RATE IN TK
						</th>
						<th className="border border-gray-300 p-2 text-center w-[15%]">
							AMOUNT IN TK
						</th>
					</tr>
				</thead>
				<tbody>
					{data?.sections &&
						data.sections.map((section, index) => (
							<React.Fragment key={index}>
								{/* Section Header */}
								<tr>
									<td className="border border-gray-300 p-2 text-center tracking-wider">
										{index + 1}
									</td>
									<td
										colSpan={6}
										className="bg-blue-100 font-bold text-center tracking-wider py-1 border border-gray-300"
									>
										{section.area}
									</td>
								</tr>

								{/* Section Parts */}
								{section?.parts?.length > 0 &&
									section.parts.map((part, partIndex) => (
										<React.Fragment key={partIndex}>
											<tr>
												<td className="border border-gray-300 p-2 text-center"></td>
												<td className="border border-gray-300 p-2">
													<div className="text-[8px]">
														{part.items.map((item, itemIndex) => (
															<div key={itemIndex}>
																<h1 className="border tracking-wide border-gray-800 font-bold px-1">
																	{item.material}
																</h1>
																{item.description}
															</div>
														))}
													</div>
												</td>
												<td className="border border-gray-300 p-2 text-center">
													{section.squareFootage || '-'}
												</td>
												<td className="border border-gray-300 p-2 text-center">
													{part.unit || 'Sqft'}
												</td>
												<td className="border border-gray-300 p-2 text-center">
													{part.ratePerSqFt || '-'}
												</td>
												<td className="border border-gray-300 p-2 text-center">
													{section.amount || '-'}
												</td>
											</tr>
										</React.Fragment>
									))}
							</React.Fragment>
						))}
				</tbody>
			</table>

			{/* Footer */}
			<div className="bg-green-100 p-2 mt-2 text-left font-bold text-[7px] w-80 rounded-sm ml-auto flex justify-between">
				<p className="">TOTAL AMOUNT = </p>
				<p className="">{data.totalAmount || ''}</p>
			</div>
		</div>
	);
};

export default QuotationTable;
