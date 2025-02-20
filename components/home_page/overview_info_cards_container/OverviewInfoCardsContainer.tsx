import SingleOverviewBanksInfoCard from "./banks_info_card/SingleOverviewBanksInfoCard";
import SingleOverviewBillsInfoCard from "./bills_info_card/SingleOverviewBillsInfoCard";
import SingleOverviewGoalsInfoCard from "./goals_info_card/SingleOverviewGoalsInfoCard";

const OverviewInfoCardsContainer = () => {
	const singleCardClassSize = "h-[260px] w-[430px]";

	return (
		<div className="w-full flex flex-row justify-between items-center flex-wrap gap-x-[60px] gap-y-[80px]">
			<div className={singleCardClassSize}>
				<SingleOverviewBanksInfoCard />
			</div>
			<div className={singleCardClassSize}>
				<SingleOverviewGoalsInfoCard />
			</div>
			<div className={singleCardClassSize}>
				<SingleOverviewBillsInfoCard />
			</div>
		</div>
	);
};

export default OverviewInfoCardsContainer;
