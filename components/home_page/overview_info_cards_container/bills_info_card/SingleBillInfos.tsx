import { MdOutlineHorizontalRule } from "react-icons/md";

import { Bill } from "@/models/bill";

const SingleBillInfos = ({
	bill,
}: {
	bill: Bill;
}) => {
	return (
		<div className="h-full w-full flex flex-row items-center">
			<div className="h-full w-[15%] flex flex-col justify-center items-center text-center">
				<div className="text-[15px] text-gray-600">
					{bill.billSentDate.split(",")[0].split(" ")[0]}
				</div>
				<div className="text-[23px] text-black font-bold">
					{bill.billSentDate.split(",")[0].split(" ")[1]}
				</div>
			</div>
			<div className="h-full w-[65%] grid grid-rows-3 justify-start items-start text-left">
				<div className="w-full flex flex-row justify-start items-center">
					<span className="text-[21px]">{bill.organization.icon}</span>
					<span className="text-[18px] text-gray-600 tracking-[1px]">
						{bill.organization.name}
					</span>
				</div>
				<div className="w-full flex flex-row justify-start items-center text-center text-[18px] font-bold gap-x-[5px]">
					<span>{bill.organization.name}</span>
					<span>{<MdOutlineHorizontalRule />}</span>
					<span>{bill.subscriptionType}</span>
				</div>
				<div className="w-full flex flex-row justify-start items-center text-center text-[13px] text-gray-500 gap-x-[5px]">
					<span>Last Charge</span>
					<span>{<MdOutlineHorizontalRule />}</span>
					<span>{bill.prevChargeDate}</span>
				</div>
			</div>
			<div className="w-[20%] grid place-items-center text-center text-[20px] text-black font-bold">
				${bill.costAmount}
			</div>
		</div>
	);
};

export default SingleBillInfos;
