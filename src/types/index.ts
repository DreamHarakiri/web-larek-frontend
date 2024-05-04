interface ICard {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number;
}

interface IOrder {
	email: string;
	phone: string;
	address: string;
	payment: string;
	total: number;
	items: string[];
}
