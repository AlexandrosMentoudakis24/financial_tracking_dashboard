"use client";

import { useState } from "react";

import TransactionsTable from "./transactions_container_content/TransactionsTable";
import PageContentNavBar from "./page_content_nav_bar/PageContentNavBar";
import {
	availableTransactionsContentTypes,
	transactions,
} from "@/models/transaction";

const TransactionsPageContent = () => {
	const [activeContentTypeTitle, setActiveContentTypeTitle] = useState<string>(
		Object.values(availableTransactionsContentTypes)[0],
	);

	return (
		<div className="w-full flex-grow flex flex-col">
			<div className="mb-[20px]">
				<PageContentNavBar
					onContentChangeHandler={(newContent) => {
						setActiveContentTypeTitle(newContent);
					}}
				/>
			</div>
			<TransactionsTable
				activeContentType={activeContentTypeTitle}
				transactions={transactions}
			/>
		</div>
	);
};

export default TransactionsPageContent;
