"use client";

import ViewAllButton from "@/components/_global/ViewAllButton";
import { Transaction, TransactionType } from "@/models/transaction";

const expenses = [
	new Transaction({
		id: "1",
		title: "GTA 5",
		transactionType: TransactionType.Expenses,
		amount: 160.0,
	}),
	new Transaction({
		id: "2",
		title: "GTA 5",
		transactionType: TransactionType.Expenses,
		amount: 20.0,
	}),
];

const revenue = [
	new Transaction({
		id: "1",
		title: "GTA 5",
		transactionType: TransactionType.Revenue,
		amount: 100.0,
	}),
	new Transaction({
		id: "2",
		title: "GTA 5",
		transactionType: TransactionType.Revenue,
		amount: 200,
	}),
];

const TransactionsContainer = () => {
	return (
		<div className="h-full w-full flex flex-col justify-start items-start bg-gray-200 py-[10px]">
			<div className="w-full flex flex-row justify-between items-center">
				<span className="overviewCardsTitleStyle">Recent Transactions</span>
				<ViewAllButton
					onbuttonClickHandler={() => {
						alert("On Click Handler has not yet been implemented...");
					}}
				/>
			</div>
			<div className="w-full flex-grow bg-red-500">hello</div>
		</div>
	);
};

export default TransactionsContainer;
