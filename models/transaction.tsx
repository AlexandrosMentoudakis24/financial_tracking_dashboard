import { MdOutlineAttachMoney } from "react-icons/md";

import { JSX } from "react";

export const TransactionType = Object.freeze({
	Expenses: "Expenses",
	Revenue: "Revenue",
} as const);

export class Transaction {
	id: string;
	title: string;
	transactionType: (typeof TransactionType)[keyof typeof TransactionType];
	amount: number;
	icon?: JSX.Element;

	constructor({
		id,
		title,
		transactionType,
		amount,
		icon,
	}: {
		id: string;
		title: string;
		transactionType: (typeof TransactionType)[keyof typeof TransactionType];
		amount: number;
		icon?: JSX.Element;
	}) {
		this.id = id;
		this.title = title;
		this.transactionType = transactionType;
		this.amount = amount;
		this.icon = icon ?? <MdOutlineAttachMoney />;
	}
}
