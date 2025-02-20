import SingleTransactionItem from "./SingleTransactionItem";

import { Transaction } from "@/models/transaction";

const TransactionsInfos = ({
	transactions,
}: { transactions: Transaction[] }) => {
	return (
		<div className="h-full w-full grid grid-rows-4">
			{transactions.map((t) => {
				return <SingleTransactionItem key={t.id} transaction={t} />;
			})}
		</div>
	);
};

export default TransactionsInfos;
