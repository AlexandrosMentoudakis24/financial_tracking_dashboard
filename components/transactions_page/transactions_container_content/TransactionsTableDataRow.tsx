import { Transaction } from "@/models/transaction";

const TransactionsTableDataRow = ({
	transaction,
}: { transaction: Transaction }) => {
	const singleItemStyle = `
    col-span-1 h-full w-full flex justify-center items-center text-center
  `;

	return (
		<div className="h-[50px] w-full grid grid-cols-5 text-[20px] text-gray-500 tracking-[1px] py-[10px]">
			<span className={`${singleItemStyle} text-black font-bold`}>
				{transaction.title}
			</span>
			<span className={singleItemStyle}>{transaction.shopName}</span>
			<span className={singleItemStyle}>{transaction.createdAt}</span>
			<span className={singleItemStyle}>{transaction.paymentMethod}</span>
			<span className={`${singleItemStyle} text-black font-bold`}>
				${transaction.amount}
			</span>
		</div>
	);
};

export default TransactionsTableDataRow;
