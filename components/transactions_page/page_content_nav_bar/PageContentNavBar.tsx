"use client";

import { useState } from "react";

import { availableTransactionsContentTypes } from "@/models/transaction";
import PageContentNavBarItem from "./PageContentNavBarItem";

const TransactionsPageNavBar = ({
	onContentChangeHandler,
}: { onContentChangeHandler: (newContent: string) => void }) => {
	const [activePageContentTitle, setActivePageContentTitle] = useState<string>(
		Object.values(availableTransactionsContentTypes)[0],
	);

	const changeActiveContent = (newTitle: string) => {
		setActivePageContentTitle(newTitle);

		onContentChangeHandler(newTitle);
	};

	return (
		<div className="w-full flex flex-row justify-start items-center gap-x-[30px]">
			{Object.values(availableTransactionsContentTypes).map((value) => {
				return (
					<PageContentNavBarItem
						key={value}
						title={value}
						isActive={activePageContentTitle === value}
						onItemClickHandler={(newContentTitle) => {
							changeActiveContent(newContentTitle);
						}}
					/>
				);
			})}
		</div>
	);
};

export default TransactionsPageNavBar;
