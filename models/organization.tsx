import { MdOutlineAttachMoney } from "react-icons/md";

import { JSX } from "react";

export const OrganizationType = Object.freeze({
	Electricity: "Electricity",
	Water: "Water",
	Internet: "Internet",
	Telephone: "Telephone",
	Other: "Other",
} as const);

export class Organization {
	id: string;
	name: string;
	organizationType: (typeof OrganizationType)[keyof typeof OrganizationType];
	icon?: JSX.Element;

	constructor({
		id,
		name,
		organizationType,
		icon,
	}: {
		id: string;
		name: string;
		organizationType: (typeof OrganizationType)[keyof typeof OrganizationType];
		icon?: JSX.Element;
	}) {
		this.id = id;
		this.name = name;
		this.organizationType = organizationType;
		this.icon = icon ?? <MdOutlineAttachMoney />;
	}
}
