import { StatisticsChartProps } from "../StatisticsChartion/StatisticsChart";

const SingleStatisticsChartItem = ({
	chartValue,
}: { chartValue: StatisticsChartProps }) => {
	return (
		<div className="relative h-full flex flex-col justify-end items-center">
			<div className="h-full flex flex-row justify-center items-end">
				<div className="h-[50%] w-[15px] rounded-t-[5px] bg-gray-300"></div>
				<div className="h-full w-[15px] rounded-t-[5px] bg-primary_color ml-[10px]"></div>
			</div>
			<div className="absolute w-[75px] text-[17px] text-gray-500 text-center tracking-[1px] bottom-[-27px]">
				{chartValue.day}
			</div>
		</div>
	);
};

export default SingleStatisticsChartItem;
