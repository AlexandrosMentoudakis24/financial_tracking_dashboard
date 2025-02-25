import DefaultPagesParent from "@/components/_global/DefaultPagesParent";
import AccountDetailsContainer from "@/components/balances_page/single_account_page/account_details_container/AccountDetailsContainer";

const SingleAccountPage = () => {
	return (
		<DefaultPagesParent>
			<div className="w-full flex flex-col">
				<span className="overviewCardsTitleStyle mb-[10px]">
					Account Details
				</span>
				<div className="w-full flex flex-col">
					<AccountDetailsContainer />
				</div>
			</div>
		</DefaultPagesParent>
	);
};

export default SingleAccountPage;
