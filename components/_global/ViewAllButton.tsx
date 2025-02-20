"use client";

import { MdArrowForwardIos } from "react-icons/md";

const ViewAllButton = ({
	onbuttonClickHandler,
}: { onbuttonClickHandler: () => void }) => {
	return (
		<button
			className="flex flex-row justify-end items-center text-center text-[17px] tracking-[2px] hover:text-black text-gray-500"
			onClick={onbuttonClickHandler}
		>
			View All
			<span className="text-[19px] ml-[10px] mb-[2px]">
				<MdArrowForwardIos />
			</span>
		</button>
	);
};

export default ViewAllButton;
