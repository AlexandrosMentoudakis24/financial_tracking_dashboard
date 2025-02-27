const TransactionsHistoryTableHeaderRow = () => {
	const singleHeaderItemStyle = `
    col-span-1 h-full w-full flex justify-center items-center text-center
  `;

	return (
		<div className="h-[40px] w-full grid grid-cols-5 text-[20px] text-black font-bold">
			<span className={singleHeaderItemStyle}>Receipt ID</span>
			<span className={singleHeaderItemStyle}>Date</span>
			<span className={singleHeaderItemStyle}>Status</span>
			<span className={singleHeaderItemStyle}>Payment Method</span>
			<span className={singleHeaderItemStyle}>Payment Amount</span>
		</div>
	);
};

export default TransactionsHistoryTableHeaderRow;
