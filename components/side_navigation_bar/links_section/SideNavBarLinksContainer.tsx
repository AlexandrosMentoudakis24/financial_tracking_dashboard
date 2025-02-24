"use client";

import { MdOutlinePriceChange } from "react-icons/md";
import { IoSwapHorizontal } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { GiExpense } from "react-icons/gi";
import { LuWallet } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { SlGrid } from "react-icons/sl";
import { GoGoal } from "react-icons/go";

import { usePathname } from "next/navigation";

import {
	SideNavBarLinkProps,
	SingleSideNavBarLink,
} from "./SingleSideNavBarLink";

const links: SideNavBarLinkProps[] = [
	{
		id: "1",
		icon: <SlGrid size={20} />,
		title: "Overview",
		target: "/",
		isActive: false,
	},
	{
		id: "2",
		icon: <LuWallet size={23} />,
		title: "Balance",
		target: "/balance",
		isActive: false,
	},
	{
		id: "3",
		icon: <IoSwapHorizontal size={23} />,
		title: "Transactions",
		target: "/transactions",
		isActive: false,
	},
	{
		id: "4",
		icon: <MdOutlinePriceChange size={23} />,
		title: "Bills",
		target: "/bills",
		isActive: false,
	},
	{
		id: "5",
		icon: <GrMoney size={20} />,
		title: "Expenses",
		target: "/expenses",
		isActive: false,
	},
	{
		id: "6",
		icon: <GoGoal size={22} />,
		title: "Goals",
		target: "/goals",
		isActive: false,
	},
	{
		id: "7",
		icon: <FiSettings size={22} />,
		title: "Settings",
		target: "/settings",
		isActive: false,
	},
];

const SideNavBarLinksContainer = () => {
	const currentPath = usePathname();

	return (
		<div className="h-full w-full flex flex-col justify-start items-center text-center gap-y-[10px]">
			{links.map((link) => {
				link.isActive = currentPath === link.target;

				return <SingleSideNavBarLink key={link.id} item={link} />;
			})}
		</div>
	);
};

export default SideNavBarLinksContainer;
