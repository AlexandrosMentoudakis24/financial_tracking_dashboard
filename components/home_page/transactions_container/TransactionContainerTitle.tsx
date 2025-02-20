"use client";

import ViewAllButton from "@/components/_global/ViewAllButton";

const TransactionContainerTitle = () => {
	return (
		<div className="w-full flex flex-row justify-between items-center">
			<span className="overviewCardsTitleStyle">Recent Transactions</span>
			<ViewAllButton
				onbuttonClickHandler={() => {
					alert("On Click Handler has not yet been implemented...");
				}}
			/>
		</div>
	);
};

export default TransactionContainerTitle;
