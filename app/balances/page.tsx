import DefaultPagesParent from "@/components/_global/DefaultPagesParent";
import BalanceCardsContainer from "@/components/balances_page/BalanceCardsContainer";

const BalancesPage = () => {
	return (
		<DefaultPagesParent>
			<div className="w-full flex flex-col">
				<span className="overviewCardsTitleStyle mb-[10px]">Balances</span>
				<BalanceCardsContainer />
			</div>
		</DefaultPagesParent>
	);
};

export default BalancesPage;
