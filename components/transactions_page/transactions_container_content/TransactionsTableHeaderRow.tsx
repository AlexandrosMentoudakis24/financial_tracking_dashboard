const TransactionsTableHeaderRow = () => {
	const singleItemStyle = `
    col-span-1 h-full w-full flex justify-center items-center text-center
  `;
	return (
		<div className="h-full w-full grid grid-cols-5 text-[20px] text-black font-bold">
			<span className={singleItemStyle}>Item</span>
			<span className={singleItemStyle}>Shop Name</span>
			<span className={singleItemStyle}>Date</span>
			<span className={singleItemStyle}>Payment Method</span>
			<span className={singleItemStyle}>Amount</span>
		</div>
	);
};

export default TransactionsTableHeaderRow;
