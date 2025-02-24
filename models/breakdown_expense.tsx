export class BreakdownExpense {
	id: string;
	title: string;
	amount: number;
	percentage: number;
	isPercentageIncreased: boolean;

	constructor({
		id,
		title,
		amount,
		percentage,
		isPercentageIncreased,
	}: {
		id: string;
		title: string;
		percentage: number;
		amount: number;
		isPercentageIncreased: boolean;
	}) {
		this.id = id;
		this.title = title;
		this.percentage = percentage;
		this.amount = amount;
		this.isPercentageIncreased = isPercentageIncreased;
	}
}
