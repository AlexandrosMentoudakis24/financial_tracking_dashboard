import ExpensesBreakdownContainer from "@/components/home_page/expenses_breakdown_container/ExpensesBreakdownContainer";
import OverviewInfoCardsContainer from "@/components/home_page/overview_info_cards_container/OverviewInfoCardsContainer";
import StatisticsContainer from "@/components/home_page/statistics_container/statistics_section/StatisticsContainer";
import TransactionsContainer from "@/components/home_page/transactions_container/TransactionsContainer";
import HomeAppBarSection from "@/components/home_page/HomeAppBarSection";

import { User } from "@/models/user";

const user: User = new User("Alexandros", "Mentoudakis");
const currentDate = "Feb 18, 2025";

const App = () => {
	return (
		<div className="h-full w-full flex flex-col text-black text-[18px] bg-gray-200 ">
			<div className="h-[80px] w-full">
				<HomeAppBarSection
					userFirstName={user.firstName}
					currentDate={currentDate}
				/>
			</div>
			<div
				className="
            flex-grow
            h-full w-full 
            flex flex-col 
            sm:justify-start md:justify-start  items-start
            overflow-auto 
            gap-x-[20px] gap-y-[35px] 
            px-[25px] pt-[10px] pb-[20px]"
			>
				<OverviewInfoCardsContainer />
				<div className="w-full flex flex-row flex-wrap justify-start items-start gap-x-[86px] gap-y-[35px]">
					<TransactionsContainer />
					<StatisticsContainer />
				</div>
				<ExpensesBreakdownContainer />
			</div>
		</div>
	);
};

export default App;
