"use client";

import { Expense, Revenue, Transaction } from "@/models/transaction";
import TransactionContainerTitle from "./TransactionContainerTitle";
import { TransactionTypeNavBar } from "./TransactionTypeNavBar";
import { useState } from "react";
import TransactionsInfos from "./TransactionsInfos";

const expenses = [
	new Expense({
		id: "1",
		title: "GTA 5",
		amount: 160.0,
	}),
	new Expense({
		id: "2",
		title: "GTA 5",
		amount: 20.0,
	}),
];

const revenue = [
	new Revenue({
		id: "3",
		title: "GTA 5",
		amount: 100.0,
	}),
	new Revenue({
		id: "4",
		title: "GTA 5",
		amount: 200,
	}),
];

const availableContentTypes = Object.freeze({
	All: "All",
	Expenses: "Expenses",
	Revenue: "Revenue",
} as const);

const TransactionsContainer = () => {
	const [activeContentType, setActiveContentType] = useState<string>(
		Object.values(availableContentTypes)[0],
	);
	const [displayedTransactions, setDisplayedTransactions] = useState<
		Transaction[]
	>([...expenses, ...revenue]);

	const changeContentType = (newContentType: string) => {
		setActiveContentType(newContentType);

		switch (newContentType) {
			case availableContentTypes.All:
				setDisplayedTransactions([...expenses, ...revenue]);
				break;
			case availableContentTypes.Expenses:
				setDisplayedTransactions([...expenses]);
				break;
			case availableContentTypes.Revenue:
				setDisplayedTransactions([...revenue]);
				break;
			default:
				break;
		}
	};

	return (
		<div className="h-full w-full flex flex-col justify-start items-start">
			<TransactionContainerTitle />
			<div className="w-full flex-grow flex flex-col bg-white rounded-[10px] mt-[10px]">
				<TransactionTypeNavBar
					availableOptions={Object.values(availableContentTypes)}
					currentActiveOption={activeContentType}
					onOptionButtonClickedHandler={changeContentType}
				/>
				<TransactionsInfos transactions={displayedTransactions} />
			</div>
		</div>
	);
};

export default TransactionsContainer;
