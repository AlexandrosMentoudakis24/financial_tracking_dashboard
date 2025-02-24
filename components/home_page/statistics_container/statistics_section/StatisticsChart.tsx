import { calcStatisticsChartData } from "@/utils/arithmetic_functions/calc_values_for_chart";
import SingleStatisticsChartItem from "./SingleStatisticsChartItem";

export interface StatisticsChartProps {
	id: string;
	day: string;
	currentValue: number;
	prevValue: number;
}

export const StatisticsChart = ({
	chartValues,
}: { chartValues: StatisticsChartProps[] }) => {
	const highestChartValue = calcStatisticsChartData({ chartData: chartValues });

	return (
		<div className="h-full w-full flex flex-col">
			<div className="h-[80%] w-full flex flex-row">
				<div className="h-full w-[10%] flex flex-col justify-between items-center text-[15px] text-gray-600 tracking-[1px]">
					<div>$250K</div>
					<div>$200K</div>
					<div>$150K</div>
					<div>$100K</div>
					<div>$0</div>
				</div>
				<div className="h-full w-[90%] flex flex-row justify-between items-end">
					{chartValues.map((v) => {
						return <SingleStatisticsChartItem key={v.id} chartValue={v} />;
					})}
				</div>
			</div>
		</div>
	);
};
