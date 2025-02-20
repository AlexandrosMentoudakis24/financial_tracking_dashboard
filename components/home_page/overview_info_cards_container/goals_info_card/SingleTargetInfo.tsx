import { JSX } from "react";

const SingleTargetInfos = ({
	title,
	icon,
	singleGoalAmount,
}: { title: string; icon: JSX.Element; singleGoalAmount: number }) => {
	return (
		<div className="h-full w-full flex flex-row justify-center items-center">
			<span className="text-[23px] mr-[5px]">{icon}</span>
			<div className="flex flex-col justify-around items-start">
				<div className="text-[17px] tracking-[1px] text-gray-500">{title}</div>
				<div className="text-[18px] font-bold">${singleGoalAmount}</div>
			</div>
		</div>
	);
};

export default SingleTargetInfos;
