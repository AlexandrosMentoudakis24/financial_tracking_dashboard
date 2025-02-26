"use client";

import {
	availableTransactionsContentTypes,
	Transaction,
	transactions,
} from "@/models/transaction";

import TransactionContainerTitle from "./TransactionContainerTitle";
import { useState } from "react";
import TransactionsInfos from "./TransactionsInfos";
import TransactionTypeNavBar from "./TransactionTypeNavBar";
import { filterTransactionsByType } from "@/utils/type_filtering/type_filtering";

const TransactionsContainer = () => {
	const [activeContentType, setActiveContentType] = useState<string>(
		Object.values(availableTransactionsContentTypes)[0],
	);
	const [displayedTransactions, setDisplayedTransactions] =
		useState<Transaction[]>(transactions);

	const changeContentType = (newContentType: string) => {
		setActiveContentType(newContentType);

		setDisplayedTransactions(
			filterTransactionsByType({
				newType: newContentType,
				transactions: transactions,
			}),
		);
	};

	return (
		<div className="h-[450px] w-[500px] flex flex-col justify-start items-start">
			<TransactionContainerTitle />
			<div className="w-full flex-grow flex flex-col bg-white rounded-[10px] mt-[10px]">
				<TransactionTypeNavBar
					availableOptions={Object.values(availableTransactionsContentTypes)}
					currentActiveOption={activeContentType}
					onOptionButtonClickedHandler={changeContentType}
				/>
				<TransactionsInfos transactions={displayedTransactions} />
			</div>
		</div>
	);
};

export default TransactionsContainer;
