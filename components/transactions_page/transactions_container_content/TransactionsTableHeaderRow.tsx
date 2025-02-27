const TransactionsTableHeaderRow = () => {
	const singleItemStyle = `
    col-span-1 h-full w-full flex justify-center items-center text-center
  `;

	return (
		<div className="h-full w-full grid grid-cols-5 text-[20px] text-black tracking-[1px] font-bold">
			<span className={singleItemStyle}>Item</span>
			<span className={singleItemStyle}>Provider</span>
			<span className={singleItemStyle}>Date</span>
			<span className={singleItemStyle}>Payment Method</span>
			<span className={singleItemStyle}>Payment Amount</span>
		</div>
	);
};

export default TransactionsTableHeaderRow;
