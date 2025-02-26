import {
	availableTransactionsContentTypes,
	Expense,
	Revenue,
	Transaction,
} from "@/models/transaction";

export const filterTransactionsByType = ({
	newType,
	transactions,
}: {
	newType: string;
	transactions: Transaction[];
}) => {
	if (newType === availableTransactionsContentTypes.All) {
		return transactions;
	}

	return transactions.filter((el) =>
		newType === availableTransactionsContentTypes.Expenses
			? el instanceof Expense
			: el instanceof Revenue,
	);
};
