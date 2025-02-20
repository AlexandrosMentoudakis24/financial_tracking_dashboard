const GoalsProgressChart = ({
	currentValue,
	targetValue,
}: { currentValue: number; targetValue: number }) => {
	const currentProgressPercentage = (currentValue / targetValue) * 100;

	return (
		<div className="h-full w-full flex flex-col justify-evenly items-center">
			<div className="h-[20px] w-[100%] rounded-full bg-gray-300">
				<div
					style={{ width: `${currentProgressPercentage}% ` }}
					className="h-[20px] rounded-full bg-primary_color"
				/>
			</div>
			<div className="w-full flex flex-row justify-between items-center">
				<div className="text-[15px] text-gray-500">$0</div>
				<div className="text-[20px] text-black font-bold">$12.5K</div>
				<div className="text-[15px] text-gray-500">$25K</div>
			</div>
		</div>
	);
};

export default GoalsProgressChart;
