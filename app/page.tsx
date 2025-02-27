import OverviewInfoCardsContainer from "@/components/home_page/overview_info_cards_container/OverviewInfoCardsContainer";
import ExpensesBreakdownContainer from "@/components/home_page/expenses_breakdown_container/ExpensesBreakdownContainer";
import { ChangeGoalInfosContainer } from "@/components/home_page/change_goal_infos_container/ChangeGoalInfosContainer";
import StatisticsContainer from "@/components/home_page/statistics_container/statistics_section/StatisticsContainer";
import TransactionsContainer from "@/components/home_page/transactions_container/TransactionsContainer";
import DefaultPagesParent from "@/components/_global/DefaultPagesParent";

const App = () => {
	return (
		<DefaultPagesParent>
			<ChangeGoalInfosContainer />
			<OverviewInfoCardsContainer />
			<div className="w-full flex flex-row flex-wrap justify-start items-start gap-x-[86px] gap-y-[35px]">
				<TransactionsContainer />
				<StatisticsContainer />
			</div>
			<ExpensesBreakdownContainer />
		</DefaultPagesParent>
	);
};

export default App;
