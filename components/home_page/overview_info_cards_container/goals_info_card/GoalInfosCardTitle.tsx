"use client";

import { AiTwotoneEdit } from "react-icons/ai";

const GoalInfosCardTitle = ({
	targetAmount,
	targetDueDate,
}: { targetAmount: number; targetDueDate: string }) => {
	return (
		<div className="h-full w-full flex flex-row justify-between items-center">
			<div className="flex flex-row justify-start items-center">
				<div className="text-[22px] text-black font-bold">${targetAmount}</div>
				<button
					className="text-[22px] pl-[15px] pb-[2px]"
					onClick={() => {
						alert("On click function has not yet been implemented...");
					}}
				>
					<AiTwotoneEdit />
				</button>
			</div>
			<div className="text-[15px] text-gray-500 text-right">
				{targetDueDate}
			</div>
		</div>
	);
};

export default GoalInfosCardTitle;
