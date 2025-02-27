import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";

import { JSX } from "react";

export const availableContentPageTypes = Object.freeze({
	All: "All",
	Expense: "Expense",
	Revenue: "Revenue",
} as const);

export type PaymentMethod = "Credit Card" | "Cash";
export type TransactionType = "Expense" | "Revenue";

export class Transaction {
	id: string;
	title: string;
	amount: number;
	shopName: string;
	paymentMethod: PaymentMethod;
	type: TransactionType;
	icon?: JSX.Element;
	createdAt?: string;

	constructor({
		id,
		title,
		amount,
		shopName,
		type,
		paymentMethod,
		icon,
		createdAt,
	}: {
		id: string;
		title: string;
		amount: number;
		shopName: string;
		paymentMethod: PaymentMethod;
		type: TransactionType;
		icon?: JSX.Element;
		createdAt?: string;
	}) {
		this.id = id;
		this.title = title;
		this.amount = amount;
		this.shopName = shopName;
		this.type = type;
		this.paymentMethod = paymentMethod;
		this.icon =
			(icon ?? this.type === "Expense") ? (
				<RiMoneyDollarCircleLine />
			) : (
				<GiExpense />
			);
		this.createdAt = createdAt ?? "Feb 30, 2025";
	}
}
export const transactions: Transaction[] = [
	new Transaction({
		id: "1",
		title: "Groceries",
		amount: 45,
		shopName: "Walmart",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "2",
		title: "Freelance Payment",
		amount: 500,
		shopName: "Upwork",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
	new Transaction({
		id: "3",
		title: "Movie Ticket",
		amount: 15,
		shopName: "AMC",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "4",
		title: "Gym Subscription",
		amount: 40,
		shopName: "Anytime Fitness",
		paymentMethod: "Cash",
		type: "Expense",
	}),
	new Transaction({
		id: "5",
		title: "Salary",
		amount: 3500,
		shopName: "Company XYZ",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
	new Transaction({
		id: "6",
		title: "Electricity Bill",
		amount: 120,
		shopName: "Power Company",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "7",
		title: "Coffee",
		amount: 5,
		shopName: "Starbucks",
		paymentMethod: "Cash",
		type: "Expense",
	}),
	new Transaction({
		id: "8",
		title: "Gift Shopping",
		amount: 80,
		shopName: "Amazon",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "9",
		title: "Stock Dividend",
		amount: 200,
		shopName: "Investment Fund",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
	new Transaction({
		id: "10",
		title: "Rent Payment",
		amount: 900,
		shopName: "Landlord",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "11",
		title: "Food Delivery",
		amount: 25,
		shopName: "Uber Eats",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "12",
		title: "Consulting Fee",
		amount: 600,
		shopName: "Freelance Client",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
	new Transaction({
		id: "13",
		title: "Phone Bill",
		amount: 55,
		shopName: "AT&T",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "14",
		title: "Car Insurance",
		amount: 130,
		shopName: "Geico",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "15",
		title: "Gaming Subscription",
		amount: 10,
		shopName: "Steam",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "16",
		title: "Side Hustle Income",
		amount: 250,
		shopName: "Etsy",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
	new Transaction({
		id: "17",
		title: "Grocery Shopping",
		amount: 60,
		shopName: "Trader Joe's",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "18",
		title: "Car Repair",
		amount: 220,
		shopName: "Auto Shop",
		paymentMethod: "Cash",
		type: "Expense",
	}),
	new Transaction({
		id: "19",
		title: "Food Truck Lunch",
		amount: 12,
		shopName: "Local Vendor",
		paymentMethod: "Cash",
		type: "Expense",
	}),
	new Transaction({
		id: "20",
		title: "Tech Bonus",
		amount: 800,
		shopName: "Company ABC",
		paymentMethod: "Credit Card",
		type: "Revenue",
	}),
	new Transaction({
		id: "21",
		title: "Concert Ticket",
		amount: 70,
		shopName: "Ticketmaster",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "22",
		title: "Online Course",
		amount: 200,
		shopName: "Udemy",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "23",
		title: "Gas Refill",
		amount: 50,
		shopName: "Shell",
		paymentMethod: "Credit Card",
		type: "Expense",
	}),
	new Transaction({
		id: "24",
		title: "Stock Market Profit",
		amount: 500,
		shopName: "E-Trade",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
	new Transaction({
		id: "25",
		title: "Annual Bonus",
		amount: 1500,
		shopName: "Company XYZ",
		paymentMethod: "Cash",
		type: "Revenue",
	}),
];
