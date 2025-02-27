import { Transaction } from "@/models/transaction";

const SingleTransactionItem = ({
	transaction,
}: { transaction: Transaction }) => {
	const isExpenseTransaction = transaction.type === "Expense";

	const transactionAmountTextClass = isExpenseTransaction
		? "text-red-500"
		: "text-green-500";

	const transactionSymbol = isExpenseTransaction ? "-" : "+";

	return (
		<div className="w-full h-full grid grid-cols-6">
			<div className="col-span-1 grid place-items-center">
				<span
					className={`${isExpenseTransaction ? "text-[26px]" : "text-[29px]"}`}
				>
					{transaction.icon}
				</span>
			</div>
			<div
				className="
            col-span-3 flex flex-col 
            justify-center items-start text-left
            text-[20px] text-black tracking-[2px]
          "
			>
				<span className="font-bold">{transaction.title}</span>
				<div className="text-[17px] text-gray-500">Gadget & Gear</div>
			</div>
			<div
				className="
            col-span-2 flex flex-col 
            justify-center items-end text-right 
            text-[25px] text-black tracking-[1px]
            mr-[25px]
          "
			>
				<span className={`${transactionAmountTextClass} font-bold`}>
					{transactionSymbol} ${transaction.amount}
				</span>
				<div className="text-[16px] text-gray-500">{transaction.createdAt}</div>
			</div>
		</div>
	);
};

export default SingleTransactionItem;
