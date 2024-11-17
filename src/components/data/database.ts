// Define types for materials and cabinets
export interface MaterialItem {
	material: string;
	description: string;
}

export interface Part {
	items: MaterialItem[];
	quantity: string;
	unit: string;
	ratePerSqFt: number;
	amount: string;
}

export interface Section {
	area: string;
	parts: Part[];
}

export interface Product {
	title: string;
	sections: Section[];
}

export interface CabinetSeries {
	series: string;
	products: Product[];
}

// Centralized materials and descriptions
const materials: Record<string, MaterialItem[]> = {
	HighGlossPremium: [
		{
			material: '16 mm Laminated Woodchips Board',
			description: 'structural body, partition, shelve & frame',
		},
		{
			material: '18 mm Hi-Gloss Malaysian Robina Brand MDF Board',
			description: 'front shutter',
		},
		{
			material: 'Moldings with Anodized Aluminium Edge Banding',
			description: 'front shutter',
		},
		{
			material: '0.5 mm PVC Edge banding Finish',
			description: 'inside structural body & frame',
		},
		{
			material: 'Earthquake-Proof Push Touch Latch Series',
			description: 'For effortless touch opening system.',
		},
		{
			material: 'Standard Hardware & Hinges',
			description: 'For Front Shutters.',
		},
		{
			material:
				'If the shelf is installed using glass, price increases by 100/- per SqFt',
			description: '',
		},
	],
	MatteStandard: [
		{
			material: '16 mm Laminated Woodchips Board',
			description: 'structural body, partition, shelve & frame',
		},
		{
			material: '16 mm Laminated Woodchips Board',
			description: 'front shutter',
		},
		{
			material: 'Moldings with Anodized Aluminium Edge Banding',
			description: 'front shutter',
		},
		{
			material: '0.5 mm PVC Edge banding Finish',
			description: 'inside structural body & frame',
		},
		{
			material: 'Earthquake-Proof Push Touch Latch Series',
			description: 'For effortless touch opening system.',
		},
		{
			material: 'Standard Hardware & Hinges',
			description: 'For Front Shutters.',
		},
		{
			material:
				'If the shelf is installed using glass, price increases by 100/- per SqFt',
			description: '',
		},
	],
	MatteEconomic: [
		{
			material: '16 mm Laminated Woodchips Board',
			description: 'structural body, partition, shelve & frame',
		},
		{
			material: '16 mm Laminated Woodchips Board',
			description: 'front shutter',
		},
		{
			material: 'Moldings with PVC Edge Banding',
			description: 'front shutter',
		},
		{
			material: '0.5 mm PVC Edge banding Finish',
			description: 'inside structural body & frame',
		},
		{
			material: 'Earthquake-Proof Push Touch Latch Series',
			description: 'For effortless touch opening system.',
		},
		{
			material: 'Standard Hardware & Hinges',
			description: 'For Front Shutters.',
		},
		{
			material:
				'If the shelf is installed using glass, price increases by 100/- per SqFt',
			description: '',
		},
	],
};

// Cabinets data
const cabinets: CabinetSeries[] = [
	{
		series: 'High-Gloss Finish Premium Cabinets',
		products: [
			{
				title: 'Kitchen Area',
				sections: [
					{
						area: 'Middle Part/Upper Part/Larder Unit',
						parts: [
							{
								items: [...materials.HighGlossPremium],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 2150,
								amount: '-',
							},
						],
					},
					{
						area: 'Lower & Upper Front Shutter Part',
						parts: [
							{
								items: [...materials.HighGlossPremium],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1750,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Full Height Cabinet',
				sections: [
					{
						area: 'Full Height Storage',
						parts: [
							{
								items: [...materials.HighGlossPremium],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 2250,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Storage Cabinet/Open Shelve',
				sections: [
					{
						area: 'Storage Cabinet/Open Shelve',
						parts: [
							{
								items: [...materials.HighGlossPremium],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 2050,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Dinner Wagon',
				sections: [
					{
						area: 'Dinner Wagon',
						parts: [
							{
								items: [...materials.HighGlossPremium],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 2150,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'TV/Media Unit Works',
				sections: [
					{
						area: 'TV/Media Unit Works',
						parts: [
							{
								items: [...materials.HighGlossPremium],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1750,
								amount: '-',
							},
						],
					},
				],
			},
		],
	},
	{
		series: 'Matte Finish Standard Cabinets',
		products: [
			{
				title: 'Kitchen Area',
				sections: [
					{
						area: 'Middle Part/Upper Part/Larder Unit',
						parts: [
							{
								items: [...materials.MatteStandard],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1750,
								amount: '-',
							},
						],
					},
					{
						area: 'Lower & Upper Front Shutter Part',
						parts: [
							{
								items: [...materials.MatteStandard],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1150,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Full Height Cabinet',
				sections: [
					{
						area: 'Full Height Storage',
						parts: [
							{
								items: [...materials.MatteStandard],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1950,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Storage Cabinet/Open Shelve',
				sections: [
					{
						area: 'Storage Cabinet/Open Shelve',
						parts: [
							{
								items: [...materials.MatteStandard],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1650,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Dinner Wagon',
				sections: [
					{
						area: 'Dinner Wagon',
						parts: [
							{
								items: [...materials.MatteStandard],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1950,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'TV/Media Unit Works',
				sections: [
					{
						area: 'TV/Media Unit Works',
						parts: [
							{
								items: [...materials.MatteStandard],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1750,
								amount: '-',
							},
						],
					},
				],
			},
		],
	},
	{
		series: 'Matte Finish Economic Cabinets',
		products: [
			{
				title: 'Kitchen Area',
				sections: [
					{
						area: 'Middle Part/Upper Part/Larder Unit',
						parts: [
							{
								items: [...materials.MatteEconomic],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1550,
								amount: '-',
							},
						],
					},
					{
						area: 'Lower & Upper Front Shutter Part',
						parts: [
							{
								items: [...materials.MatteEconomic],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1050,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Full Height Cabinet',
				sections: [
					{
						area: 'Full Height Storage',
						parts: [
							{
								items: [...materials.MatteEconomic],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1750,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Storage Cabinet/Open Shelve',
				sections: [
					{
						area: 'Storage Cabinet/Open Shelve',
						parts: [
							{
								items: [...materials.MatteEconomic],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1500,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'Dinner Wagon',
				sections: [
					{
						area: 'Dinner Wagon',
						parts: [
							{
								items: [...materials.MatteEconomic],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1750,
								amount: '-',
							},
						],
					},
				],
			},
			{
				title: 'TV/Media Unit Works',
				sections: [
					{
						area: 'TV/Media Unit Works',
						parts: [
							{
								items: [...materials.MatteEconomic],
								quantity: '-',
								unit: 'Sqft',
								ratePerSqFt: 1550,
								amount: '-',
							},
						],
					},
				],
			},
		],
	},
];

// Exporting the modules
export { materials, cabinets };
