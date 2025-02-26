import DefaultPagesParent from "@/components/_global/DefaultPagesParent";
import AccountDetailsContainer from "@/components/balances_page/single_account_page/account_details_container/AccountDetailsContainer";
import TransactionsHistoryContainer from "@/components/balances_page/single_account_page/transactions_history_container/TransactionsHistoryContainer";

const SingleAccountPage = () => {
	return (
		<DefaultPagesParent>
			<AccountDetailsContainer />
			<TransactionsHistoryContainer />
		</DefaultPagesParent>
	);
};

export default SingleAccountPage;
