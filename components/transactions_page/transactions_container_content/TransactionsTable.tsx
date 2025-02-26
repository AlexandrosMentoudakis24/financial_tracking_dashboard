import { useEffect, useState } from "react";

import { filterTransactionsByType } from "@/utils/type_filtering/type_filtering";
import { Transaction } from "@/models/transaction";
import TransactionsTableHeaderRow from "./TransactionsTableHeaderRow";

const TransactionsTable = ({
	activeContentType,
	transactions,
}: {
	activeContentType: string;
	transactions: Transaction[];
}) => {
	const [displayedTransactions, setDisplayedTransactions] =
		useState<Transaction[]>(transactions);

	console.log(displayedTransactions);

	useEffect(() => {
		setDisplayedTransactions(
			filterTransactionsByType({
				newType: activeContentType,
				transactions: transactions,
			}),
		);
	}, [activeContentType, transactions]);

	return (
		<div className="w-full flex-grow flex flex-col rounded-[5px] bg-white px-[30px] py-[20px]">
			<div className="h-[50px] w-full">
				<TransactionsTableHeaderRow />
			</div>
		</div>
	);
};

export default TransactionsTable;
