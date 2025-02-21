import SingleOverviewCard from "../overview_info_cards_container/SingleOverviewCard";

const ExpensesBreakdownContainer = () => {
	return (
		<SingleOverviewCard
			overviewCardProps={{
				cardTitleDiv: <>Expenses Breakdown</>,
				firstChildDiv: <div className="h-full w-full"></div>,
				secondChildDiv: <div className="h-full w-full"></div>,
				firstChildSpan: 1,
				secondChildSpan: 1,
			}}
		/>
	);
};

export default ExpensesBreakdownContainer;
