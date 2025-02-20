import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";

import { JSX } from "react";

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
