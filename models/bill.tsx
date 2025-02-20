import { Organization } from "./organization";

export const SubscriptionType = Object.freeze({
	Monthly: "Monthly",
	Monthly_2: "Every Two Months",
	Monthly_: "Every Three Months",
	Yearly: "Yearly",
} as const);

export class Bill {
	id: string;
	organization: Organization;
	subscriptionType: (typeof SubscriptionType)[keyof typeof SubscriptionType];
	prevChargeDate: string;
	billSentDate: string;
	billDueDate: string;
	costAmount: number;

	constructor({
		id,
		organization,
		subscriptionType,
		billSentDate,
		prevChargeDate,
		billDueDate,
		costAmount,
	}: {
		id: string;
		organization: Organization;
		subscriptionType: (typeof SubscriptionType)[keyof typeof SubscriptionType];
		prevChargeDate: string;
		billSentDate: string;
		billDueDate: string;
		costAmount: number;
	}) {
		this.id = id;
		this.organization = organization;
		this.subscriptionType = subscriptionType;
		this.prevChargeDate = prevChargeDate;
		this.billSentDate = billSentDate;
		this.billDueDate = billDueDate;
		this.costAmount = costAmount;
	}
}
