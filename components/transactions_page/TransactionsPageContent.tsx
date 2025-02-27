"use client";

import { useState } from "react";

import TransactionsTable from "./transactions_container_content/TransactionsTable";
import { availableContentPageTypes, transactions } from "@/models/transaction";
import PageContentNavBar from "./page_content_nav_bar/PageContentNavBar";

const TransactionsPageContent = () => {
	const contentTypes = Object.values(availableContentPageTypes);

	const [activeContentTypeTitle, setActiveContentTypeTitle] = useState<string>(
		contentTypes[0],
	);

	return (
		<div className="w-full flex-grow flex flex-col">
			<div className="mb-[20px]">
				<PageContentNavBar
					availableTypes={contentTypes}
					onContentChangeHandler={(newContent) => {
						setActiveContentTypeTitle(newContent);
					}}
				/>
			</div>
			<div className="h-[700px] w-full">
				<TransactionsTable
					activeContentType={activeContentTypeTitle}
					transactions={transactions}
				/>
			</div>
		</div>
	);
};

export default TransactionsPageContent;
