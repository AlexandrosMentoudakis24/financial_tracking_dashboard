"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const GoBackButton = () => {
	const router = useRouter();

	return (
		<button
			className="flex flex-row items-center text-[20px] text-black hover:text-gray-500"
			onClick={() => {
				router.back();
			}}
		>
			<span className="mr-[10px]">
				<IoArrowBack size={22} />
			</span>
			Go Back
		</button>
	);
};

export default GoBackButton;
