import { RxDoubleArrowRight } from "react-icons/rx";

const HomeProfileSection = ({
	userFName,
	currentDate,
}: { userFName: string; currentDate: string }) => {
	return (
		<div className="flex flex-row justify-start items-center text-center">
			<div className="text-[23px] tracking-[1px] font-bold">
				Hello {userFName}
			</div>
			<div className="flex flex-row items-center text-center text-[18px] text-gray-400 ml-[25px] mt-[2px]">
				<RxDoubleArrowRight />
				<span className="mt-[3px] ml-[10px]"> {currentDate}</span>
			</div>
		</div>
	);
};

export default HomeProfileSection;
