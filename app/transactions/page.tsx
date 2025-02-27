import TransactionsPageContent from "@/components/transactions_page/TransactionsPageContent";
import DefaultPagesParent from "@/components/_global/DefaultPagesParent";

const TransactionsPage = () => {
	return (
		<DefaultPagesParent>
			<div className="overviewCardsTitleStyle">Recent Transactions</div>
			<div className="h-full w-full">
				<TransactionsPageContent />
			</div>
		</DefaultPagesParent>
	);
};

export default TransactionsPage;
