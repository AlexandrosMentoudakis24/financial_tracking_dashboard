import SingleOverviewCard from "../../overview_info_cards_container/SingleOverviewCard";

const ExpensesBreakdownContainer = () => {
	return (
		<SingleOverviewCard
			overviewCardProps={{
				cardTitleDiv: <div className="h-full w-full flex flex-row justify-between items-center">Statistics</>,
				firstChildDiv: <div className="h-full w-full pr-[15px]"></div>,
				secondChildDiv: (
					<div className="h-full w-full pr-[15px] mt-[10px]"></div>
				),
				firstChildSpan: 1,
				secondChildSpan: 1,
			}}
		/>
	);
};

export default ExpensesBreakdownContainer;
