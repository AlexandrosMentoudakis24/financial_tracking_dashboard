"use client";

import { Bill, SubscriptionType } from "@/models/bill";
import { Organization, OrganizationType } from "@/models/organization";
import SingleBillInfos from "./SingleBillInfos";
import SingleOverviewCard from "../SingleOverviewCard";
import ViewAllButton from "@/components/_global/ViewAllButton";

const bill = new Bill({
	id: "1",
	organization: new Organization({
		id: "1",
		name: "Cosmote",
		organizationType: OrganizationType.Internet,
	}),
	subscriptionType: SubscriptionType.Monthly,
	prevChargeDate: "Feb 19, 2024",
	billSentDate: "Feb 19, 2025",
	billDueDate: "Mar 19, 2025",
	costAmount: 550,
});

const SingleOverviewBillsInfoCard = () => {
	return (
		<SingleOverviewCard
			overviewCardProps={{
				cardTitleDiv: (
					<div className="h-full w-full flex flex-row justify-between items-center">
						<span>Upcoming Bills</span>
						<ViewAllButton
							onbuttonClickHandler={() => {
								alert("On Click Handler has not yet been implemented...");
							}}
						/>
					</div>
				),
				firstChildDiv: <SingleBillInfos bill={bill} />,
				secondChildDiv: <SingleBillInfos bill={bill} />,
				thirdChildDiv: <SingleBillInfos bill={bill} />,

				firstChildSpan: 1,
				secondChildSpan: 1,
				thirdChildSpan: 1,
			}}
		/>
	);
};

export default SingleOverviewBillsInfoCard;
