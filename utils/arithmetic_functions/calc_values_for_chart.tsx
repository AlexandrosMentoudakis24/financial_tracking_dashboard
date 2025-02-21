import { StatisticsChartProps } from "@/components/home_page/statistics_container/StatisticsChart";

export const calcStatisticsChartData = ({
	chartData,
}: { chartData: StatisticsChartProps[] }) => {
	var highestCurrentValue = 0.0;
	var highestPrevValue = 0.0;

	Object.values(chartData).map((e) => {
		highestPrevValue = Math.max(highestPrevValue, e.prevValue);
		highestCurrentValue = Math.max(highestCurrentValue, e.currentValue);
	});

	const highestTotalValue = Math.max(
		0.0,
		Math.max(highestPrevValue, highestCurrentValue),
	);

	return highestTotalValue;
};
