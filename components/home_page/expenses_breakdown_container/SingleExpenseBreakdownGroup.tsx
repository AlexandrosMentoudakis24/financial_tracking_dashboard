import SingleExpenseBreakdownItem from "./SingleExpenseBreakdownItem";

import { BreakdownExpense } from "@/models/breakdown_expense";

const SingleExpenseBreakdownGroup = ({
	expenses,
}: { expenses: BreakdownExpense[] }) => {
	return (
		<div className="h-full w-full grid grid-cols-3 gap-[5px] px-[15px]">
			{expenses.map((e) => {
				return <SingleExpenseBreakdownItem key={e.id} expense={e} />;
			})}
		</div>
	);
};

export default SingleExpenseBreakdownGroup;
