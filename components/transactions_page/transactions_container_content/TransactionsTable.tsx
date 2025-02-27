import { useEffect, useState } from "react";

import { filterTransactionsByType } from "@/utils/type_filtering/type_filtering";
import TransactionsTableHeaderRow from "./TransactionsTableHeaderRow";
import TransactionsTableContent from "./TransactionsTableContent";
import { Transaction } from "@/models/transaction";

const TransactionsTable = ({
	activeContentType,
	transactions,
}: {
	activeContentType: string;
	transactions: Transaction[];
}) => {
	const [displayedTransactions, setDisplayedTransactions] =
		useState<Transaction[]>(transactions);

	useEffect(() => {
		setDisplayedTransactions(
			filterTransactionsByType({
				newType: activeContentType,
				transactions: transactions,
			}),
		);
	}, [activeContentType, transactions]);

	return (
		<div className="h-full w-full flex flex-col rounded-[5px] bg-white px-[5px] py-[15px]">
			<div className="h-[50px] w-full">
				<TransactionsTableHeaderRow />
			</div>
			<div className="scrollable h-full w-full flex flex-col mb-[20px]">
				<TransactionsTableContent transactions={displayedTransactions} />
			</div>
			<div className="h-[50px] w-full flex flex-row justify-center items-center text-center">
				<button className="text-[20px] text-white font-bold rounded-[5px] bg-primary_color px-[25px] py-[10px]">
					Load More
				</button>
			</div>
		</div>
	);
};

export default TransactionsTable;
