import TransactionsHistoryTableHeaderRow from "./TransactionsHistoryTableHeaderRow";
import TransactionsHistoryTableDataRow from "./TransactionsHistoryTableDataRow";
import LoadMoreTransactionsButton from "./LoadMoreTransactionsButton";

const TransactionsHistoryContainer = () => {
	return (
		<div className="w-full flex flex-col">
			<span className="overviewCardsTitleStyle mb-[10px]">
				Transactions History
			</span>
			<div
				className="
          h-[450px] w-[80%]
          flex flex-col 
          rounded-[5px] bg-white
          px-[5px] py-[15px]
        "
			>
				<TransactionsHistoryTableHeaderRow />
				<div className="scrollable w-full flex-grow flex flex-col justify-start gap-y-[15px] mt-[15px] mb-[25px]">
					<TransactionsHistoryTableDataRow />
					<TransactionsHistoryTableDataRow />
					<TransactionsHistoryTableDataRow />
					<TransactionsHistoryTableDataRow />
					<TransactionsHistoryTableDataRow />
					<TransactionsHistoryTableDataRow />
					<TransactionsHistoryTableDataRow />
				</div>
				<div className="w-full flex justify-center items-center">
					<LoadMoreTransactionsButton />
				</div>
			</div>
		</div>
	);
};

export default TransactionsHistoryContainer;
