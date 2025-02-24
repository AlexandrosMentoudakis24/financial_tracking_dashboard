import SingleOverviewBanksInfoCard from "./banks_info_card/SingleOverviewBanksInfoCard";
import SingleOverviewBillsInfoCard from "./bills_info_card/SingleOverviewBillsInfoCard";
import SingleOverviewGoalsInfoCard from "./goals_info_card/SingleOverviewGoalsInfoCard";

const OverviewInfoCardsContainer = () => {
	const singleCardClassSize = "h-[300px] w-[430px]";

	return (
		<div className="h-[300px] w-full flex flex-row justify-between items-start flex-wrap">
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
