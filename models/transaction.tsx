import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";

import { JSX } from "react";

export const availableTransactionsContentTypes = Object.freeze({
	All: "All",
	Expenses: "Expenses",
	Revenue: "Revenue",
} as const);

//export type TransactionNavBarType =
//	(typeof availableTransactionsContentTypes)[keyof typeof availableTransactionsContentTypes];

export interface Transaction {
	id: string;
	title: string;
	amount: number;
	icon?: JSX.Element;
	createdAt?: string;
}

export class Expense implements Transaction {
	id: string;
	title: string;
	amount: number;
	icon?: JSX.Element;
	createdAt?: string;

	constructor({
		id,
		title,
		amount,
		icon,
		createdAt,
	}: {
		id: string;
		title: string;
		amount: number;
		icon?: JSX.Element;
		createdAt?: string;
	}) {
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.icon = icon ?? <GiExpense />;
		this.createdAt = createdAt ?? "30 Feb 2025";
	}
}

export class Revenue implements Transaction {
	id: string;
	title: string;
	amount: number;
	icon?: JSX.Element;
	createdAt?: string;

	constructor({
		id,
		title,
		amount,
		icon,
		createdAt,
	}: {
		id: string;
		title: string;
		amount: number;
		icon?: JSX.Element;
		createdAt?: string;
	}) {
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.icon = icon ?? <RiMoneyDollarCircleLine />;
		this.createdAt = createdAt ?? "30 Feb 2025";
	}
}

export const transactions = [
	new Expense({
		id: "1",
		title: "GTA 1",
		amount: 10.0,
	}),
	new Expense({
		id: "2",
		title: "GTA 2",
		amount: 20.0,
	}),

	new Revenue({
		id: "3",
		title: "GTA 3",
		amount: 30.0,
	}),
	new Revenue({
		id: "4",
		title: "GTA 4",
		amount: 40.0,
	}),
];
