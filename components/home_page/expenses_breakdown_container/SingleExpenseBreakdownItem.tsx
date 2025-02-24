import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuHouse } from "react-icons/lu";

import { BreakdownExpense } from "@/models/breakdown_expense";

const SingleExpenseBreakdownItem = ({
	expense,
}: {
	expense: BreakdownExpense;
}) => {
	const displayedIcon = expense.isPercentageIncreased ? (
		<IoArrowUpOutline color="red" />
	) : (
		<IoArrowDownOutline color="green" />
	);

	return (
		<div className="h-full w-full flex flex-row justify-around items-center text-[18px] text-gray-500">
			<span className="text-[27px]">
				<LuHouse />
			</span>
			<div className="flex flex-col justify-center items-center">
				<span>{expense.title}</span>
				<span className="text-[21px] text-black font-bold">
					${expense.amount}
				</span>
				<div className="w-full flex flex-row justify-start items-center">
					<span>{expense.percentage}%</span>
					<span className="text-[22px] font-bold ml-[7px]">
						{displayedIcon}
					</span>
				</div>
			</div>
			<button className="text-[40px]">
				<IoIosArrowRoundForward />
			</button>
		</div>
	);
};

export default SingleExpenseBreakdownItem;
