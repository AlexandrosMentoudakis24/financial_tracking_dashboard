import { MdOutlineArrowOutward } from "react-icons/md";

import Image from "next/image";

import { BankCard } from "@/models/bank_card";

const SingleBankCard = ({ bankCard }: { bankCard: BankCard }) => {
	const firstQuarter = bankCard.cardNumber.slice(0, 4);
	const lastQuarter = bankCard.cardNumber.slice(12, 16);

	const formattedCardNumber = firstQuarter + " **** " + " **** " + lastQuarter;

	return (
		<div className="h-[115px] w-full grid grid-cols-2 text-white rounded-[5px] bg-primary_color px-[15px] mt-[10px]">
			<div className="h-full w-full flex flex-col justify-center items-start text-left gap-y-[3px]">
				<div className="text-[17px] text-gray-200">Account Type</div>
				<div className="text-[20px] font-bold">{bankCard.cardType}</div>
				<div className="text-[15px] text-gray-200">{formattedCardNumber}</div>
			</div>
			<div className="h-full w-full flex flex-col justify-center items-end text-right">
				<Image
					height="50"
					width="75"
					className="h-[50px] w-[75px] bg-transparent"
					src={"/assets/images/credit_card_icon.png"}
					alt="credit card log"
				/>
				<div className="w-full flex flex-row justify-end items-center text-[20px] font-bold pr-[15px]">
					<div className="text-[20px] font-bold">${bankCard.accountMoney}</div>
					<button
						className="text-[18px] font-bold text-primary_color rounded-full bg-white p-[4px] ml-[20px]"
						onClick={() => {
							alert("On Click function has not yet been implemented...");
						}}
					>
						<MdOutlineArrowOutward />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleBankCard;
