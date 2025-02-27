"use client";

import { useState } from "react";

import PageContentNavBarItem from "./PageContentNavBarItem";

const TransactionsPageNavBar = ({
	availableTypes,
	onContentChangeHandler,
}: {
	availableTypes: string[];
	onContentChangeHandler: (newContent: string) => void;
}) => {
	const [activePageContentTitle, setActivePageContentTitle] = useState<string>(
		availableTypes[0],
	);

	const changeActiveContent = (newTitle: string) => {
		setActivePageContentTitle(newTitle);

		onContentChangeHandler(newTitle);
	};

	return (
		<div className="w-full flex flex-row justify-start items-center gap-x-[30px]">
			{availableTypes.map((value) => {
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
