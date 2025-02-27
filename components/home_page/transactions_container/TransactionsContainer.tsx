"use client";

import { useState } from "react";

import { filterTransactionsByType } from "@/utils/type_filtering/type_filtering";
import TransactionContainerTitle from "./TransactionContainerTitle";
import TransactionTypeNavBar from "./TransactionTypeNavBar";
import TransactionsInfos from "./TransactionsInfos";
import {
	availableContentPageTypes,
	Transaction,
	transactions,
} from "@/models/transaction";

const TransactionsContainer = () => {
	const availableTypes = Object.values(availableContentPageTypes);

	const [activeContentType, setActiveContentType] = useState<string>(
		availableTypes[0],
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
					availableOptions={availableTypes}
					currentActiveOption={activeContentType}
					onOptionButtonClickedHandler={changeContentType}
				/>
				<TransactionsInfos transactions={displayedTransactions} />
			</div>
		</div>
	);
};

export default TransactionsContainer;
