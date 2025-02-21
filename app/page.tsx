import OverviewInfoCardsContainer from "@/components/home_page/overview_info_cards_container/OverviewInfoCardsContainer";
import TransactionsContainer from "@/components/home_page/transactions_container/TransactionsContainer";
import HomeAppBarSection from "@/components/home_page/HomeAppBarSection";

import { User } from "@/models/user";
import StatisticsContainer from "@/components/home_page/statistics_container/StatisticsContainer";

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
			<div className="flex flex-grow mx-[25px] my-[15px]">
				<div className="h-full w-full grid grid-rows-5">
					<div className="row-span-2">
						<OverviewInfoCardsContainer />
					</div>
					<div className="row-span-3 h-full w-full flex flex-row justify-start items-center">
						<div className="h-full w-[33%]">
							<TransactionsContainer />
						</div>
						<div className="h-full w-[63%] ml-[4%]">
							<div className="h-[55%] w-full">
								<StatisticsContainer />
							</div>
							<div className="h-[45%] w-full bg-red-500"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
