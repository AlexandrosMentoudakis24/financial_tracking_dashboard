"use client";

import { RxOpenInNewWindow } from "react-icons/rx";

import { formatBankCardNumber } from "@/utils/string_formatting/string_formatting";
import { usePathname, useRouter } from "next/navigation";
import { TiArrowForward } from "react-icons/ti";

const SingleBalanceCard = () => {
	const router = useRouter();
	const currentPath = usePathname();

	const formattedCardNumber = formatBankCardNumber({
		cardNumber: "1234567843211234",
	});

	return (
		<div className="h-[270px] w-[450px] flex flex-col justify-around rounded-[7px] bg-white px-[20px] py-[15px]">
			<div className="w-full flex flex-row justify-between items-center text-[17px] text-gray-600">
				<span>Personal</span>
				<button
					className="text-[30px] text-primary_color"
					onClick={() => {
						router.push(`./${currentPath}/accounts/123`);
					}}
				>
					<RxOpenInNewWindow />
				</button>
			</div>
			<div className="flex flex-col justify-around">
				<span className="text-[20px] font-bold">{formattedCardNumber}</span>
				<span className="text-[17px] text-gray-400">Card Number</span>
			</div>
			<div className="flex flex-col justify-around">
				<span className="text-[20px] font-bold">$25000</span>
				<span className="text-[17px] text-gray-400">Account Balance</span>
			</div>
			<div className="w-full flex flex-row justify-between items-center">
				<button className="text-primary_color hover:opacity-80">Remove</button>
				<button
					className="
                flex flex-row 
                justify-around items-center text-center 
                text-[17px] text-white  
                rounded-[5px] 
                bg-primary_color hover:bg-opacity-80 
                px-[20px] py-[7px] 
              "
				>
					Details
					<span className="ml-[7px]">{<TiArrowForward size={20} />}</span>
				</button>
			</div>
		</div>
	);
};

export default SingleBalanceCard;
