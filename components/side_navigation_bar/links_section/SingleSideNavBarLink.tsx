"use client";

import Link from "next/link";

import { JSX } from "react";

export interface SideNavBarLinkProps {
	id: string;
	title: string;
	target: string;
	icon: JSX.Element;
	isActive: boolean;
}

export const SingleSideNavBarLink = ({
	item,
}: { item: SideNavBarLinkProps }) => {
	const linkExtraStyle = item.isActive
		? "bg-primary_color text-white"
		: "bg-transaprent text-gray-300";

	return (
		<Link
			className={`
        ${linkExtraStyle}
        h-[45px] w-full
        flex flex-row 
        justify-start items-center text-center
        rounded-[8px]
        pl-[25px]
      `}
			href={item.target}
		>
			<span>{item.icon}</span>
			<span className="text-[19px] ml-[15px]">{item.title}</span>
		</Link>
	);
};
