import { StatisticsChart, StatisticsChartProps } from "./StatisticsChart";
import StatisticsContainerInfosRow from "./StatisticsContainerInfosRow";

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
		<div className="h-[450px] w-[950px] flex flex-col justify-start items-start">
			<div className="h-[40px] w-full overviewCardsTitleStyle pb-[10px]">
				Statistics
			</div>
			<div className="h-[410px] w-full flex flex-col rounded-[10px] bg-white gap-[20px] px-[20px] py-[5px]">
				<div className="h-[10%] w-full">
					<StatisticsContainerInfosRow />
				</div>
				<div className="h-[90%] w-full pr-[20px]">
					<StatisticsChart chartValues={chartData} />
				</div>
			</div>
		</div>
	);
};

export default StatisticsContainer;
