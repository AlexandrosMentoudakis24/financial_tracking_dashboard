import TransactionsTableDataRow from "./TransactionsTableDataRow";
import { Transaction } from "@/models/transaction";

const TransactionsTableContent = ({
	transactions,
}: { transactions: Transaction[] }) => {
	return (
		<>
			{transactions.map((t) => {
				return <TransactionsTableDataRow key={t.id} transaction={t} />;
			})}
		</>
	);
};

export default TransactionsTableContent;
