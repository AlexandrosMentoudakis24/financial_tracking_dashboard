import SingleOverviewCard from "../overview_info_cards_container/SingleOverviewCard";
import StatisticsContainerInfosRow from "./StatisticsContainerInfosRow";
import { StatisticsChart, StatisticsChartProps } from "./StatisticsChart";

const chartData: StatisticsChartProps[] = [
	{ id: "7", day: "Mon 11", currentValue: 13000, prevValue: 6500 },
	{ id: "6", day: "Tue 12", currentValue: 15000, prevValue: 7500 },
	{ id: "5", day: "Wed 13", currentValue: 17000, prevValue: 8500 },
	{ id: "4", day: "Thu 14", currentValue: 19000, prevValue: 9500 },
	{ id: "3", day: "Fri 15", currentValue: 21000, prevValue: 10500 },
	{ id: "2", day: "Sat 16", currentValue: 23000, prevValue: 11500 },
	{ id: "1", day: "Sun 17", currentValue: 25000, prevValue: 12500 },
];

const StatisticsContainer = () => {
	return (
		<SingleOverviewCard
			overviewCardProps={{
				cardTitleDiv: <>Statistics</>,
				firstChildDiv: (
					<div className="h-full w-full pr-[15px]">
						<StatisticsContainerInfosRow />
					</div>
				),
				secondChildDiv: (
					<div className="h-full w-full pr-[15px] mt-[10px]">
						<StatisticsChart chartValues={chartData} />
					</div>
				),
				firstChildSpan: 1,
				secondChildSpan: 3,
			}}
		/>
	);
};

export default StatisticsContainer;
