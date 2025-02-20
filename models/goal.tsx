export const GoalType = Object.freeze({
	Income: "Income Goals",
	Expenses: "Expense Goals",
} as const);

export class Goal {
	id: string;
	goalType: (typeof GoalType)[keyof typeof GoalType];
	targetDueDate: string;
	targetAmount: number;
	currentAmount: number;
	starterAmount?: number;

	constructor({
		id,
		goalType,
		targetDueDate,
		targetAmount,
		currentAmount,
		starterAmount,
	}: {
		id: string;
		goalType: (typeof GoalType)[keyof typeof GoalType];
		targetDueDate: string;
		starterAmount?: number;
		currentAmount: number;
		targetAmount: number;
	}) {
		this.id = id;
		this.goalType = goalType;
		this.targetDueDate = targetDueDate;
		this.starterAmount = starterAmount ?? 0.0;
		this.currentAmount = currentAmount;
		this.targetAmount = targetAmount;
	}
}
