import OverviewInfoCardsContainer from "@/components/home_page/overview_info_cards_container/OverviewInfoCardsContainer";
import HomeAppBarSection from "@/components/home_page/HomeAppBarSection";

import { User } from "@/models/user";
import TransactionsContainer from "@/components/home_page/transactions_container/TransactionsContainer";

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
					<div className="row-span-3 grid grid-cols-7">
						<div className="h-full w-full col-span-2">
							<TransactionsContainer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
