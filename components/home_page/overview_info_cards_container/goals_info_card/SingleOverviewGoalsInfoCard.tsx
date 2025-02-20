"use client";

import { TbTargetArrow } from "react-icons/tb";
import { RiMedalLine } from "react-icons/ri";

import GoalsProgressChart from "./GoalsProgressChart";
import GoalInfosCardTitle from "./GoalInfosCardTitle";
import SingleTargetInfos from "./SingleTargetInfo";

import { Goal, GoalType } from "@/models/goal";
import SingleOverviewCard from "../SingleOverviewCard";

const goal = new Goal({
	id: "1",
	goalType: GoalType.Income,
	targetAmount: 25000,
	currentAmount: 12500,
	targetDueDate: "Feb 30, 2025",
});

const SingleOverviewGoalsInfoCard = () => {
	return (
		<SingleOverviewCard
			overviewCardProps={{
				cardTitleDiv: <>Goals</>,
				firstChildDiv: (
					<GoalInfosCardTitle
						targetAmount={goal.targetAmount}
						targetDueDate={goal.targetDueDate}
					/>
				),
				secondChildDiv: (
					<div className="h-full w-full flex flex-row">
						<SingleTargetInfos
							title="Target Achieved"
							icon={<RiMedalLine />}
							singleGoalAmount={12500}
						/>
						<SingleTargetInfos
							title="Next Target"
							icon={<TbTargetArrow />}
							singleGoalAmount={25000}
						/>
					</div>
				),
				thirdChildDiv: (
					<GoalsProgressChart
						currentValue={goal.currentAmount}
						targetValue={goal.targetAmount}
					/>
				),
			}}
		/>
	);
};

export default SingleOverviewGoalsInfoCard;
