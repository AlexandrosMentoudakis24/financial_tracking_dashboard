"use client";

import { AiTwotoneEdit } from "react-icons/ai";
import { changeGoalInfosModalParamKey } from "../../change_goal_infos_container/ChangeGoalInfosContainer";
import { useRouter, useSearchParams } from "next/navigation";

const GoalInfosCardTitle = ({
	targetAmount,
	targetDueDate,
}: { targetAmount: number; targetDueDate: string }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const openChangeGoalInfosModal = () => {
		const modalParamKey = changeGoalInfosModalParamKey;

		const params = new URLSearchParams(searchParams.toString());

		params.set(modalParamKey, "true");

		router.push(`?${params.toString()}`);
	};

	return (
		<div className="h-full w-full flex flex-row justify-between items-center">
			<div className="flex flex-row justify-start items-center">
				<div className="text-[22px] text-black font-bold">${targetAmount}</div>
				<button
					className="text-[22px] pl-[15px] pb-[2px]"
					onClick={openChangeGoalInfosModal}
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
