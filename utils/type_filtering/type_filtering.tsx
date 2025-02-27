import { availableContentPageTypes, Transaction } from "@/models/transaction";

export const filterTransactionsByType = ({
	newType,
	transactions,
}: {
	newType: string;
	transactions: Transaction[];
}) => {
	if (newType === availableContentPageTypes.All) {
		return transactions;
	}

	return transactions.filter((el) => el.type === newType);
};
