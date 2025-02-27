const TransactionsHistoryTableDataRow = () => {
	const singleDataItemStyle = `
    col-span-1 h-full w-full flex justify-center items-center border-t-[1px] border-gray-300 py-[10px]
  `;

	return (
		<div className="h-[40px] w-full grid grid-cols-5 text-[20px] text-gray-500">
			<span className={singleDataItemStyle}>12345678</span>
			<span className={singleDataItemStyle}>Fed 25, 2025</span>
			<span className={singleDataItemStyle}>Completed</span>
			<span className={singleDataItemStyle}>Credit Card</span>
			<span className={singleDataItemStyle}>$25.000</span>
		</div>
	);
};

export default TransactionsHistoryTableDataRow;
