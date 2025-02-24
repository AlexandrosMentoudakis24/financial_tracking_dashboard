import BreakdownContainerTitle from "../statistics_container/expenses_breakdown_section/BreakdownContainerTitle";
import SingleExpenseBreakdownGroup from "./SingleExpenseBreakdownGroup";

import { BreakdownExpense } from "@/models/breakdown_expense";

const fExpenses = [
	new BreakdownExpense({
		id: "1",
		title: "Housing",
		amount: 350,
		percentage: 15,
		isPercentageIncreased: false,
	}),
	new BreakdownExpense({
		id: "2",
		title: "Housing",
		amount: 350,
		percentage: 15,
		isPercentageIncreased: true,
	}),
	new BreakdownExpense({
		id: "3",
		title: "Housing",
		amount: 350,
		percentage: 15,
		isPercentageIncreased: false,
	}),
];

const sExpenses = [
	new BreakdownExpense({
		id: "4",
		title: "Housing",
		amount: 350,
		percentage: 15,
		isPercentageIncreased: true,
	}),
	new BreakdownExpense({
		id: "5",
		title: "Housing",
		amount: 350,
		percentage: 15,
		isPercentageIncreased: false,
	}),
	new BreakdownExpense({
		id: "6",
		title: "Housing",
		amount: 1350,
		percentage: 45,
		isPercentageIncreased: true,
	}),
];

const ExpensesBreakdownContainer = () => {
	return (
		<div className="h-[290px] w-[750px] flex flex-col justify-start items-start">
			<div className="h-[40px] w-full pb-[10px]">
				<BreakdownContainerTitle />
			</div>
			<div className="h-[250px] w-full grid grid-rows-2 rounded-[10px] bg-white">
				{<SingleExpenseBreakdownGroup expenses={fExpenses} />}
				{<SingleExpenseBreakdownGroup expenses={sExpenses} />}
			</div>
		</div>
	);
};

export default ExpensesBreakdownContainer;
