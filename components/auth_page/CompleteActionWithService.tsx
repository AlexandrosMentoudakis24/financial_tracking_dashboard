"use client";

import Image from "next/image";

const CompleteActionWithService = ({
	serviceName,
	serviceImagePath,
	onButtonClickHandler,
}: {
	serviceName: string;
	serviceImagePath: string;
	onButtonClickHandler: () => void;
}) => {
	return (
		<button
			onClick={onButtonClickHandler}
			className="h-[35px] w-full 
        flex flex-row justify-center items-center
        text-[17px] text-gray-700
        bg-gray-500 bg-opacity-30
        rounded-full
        px-[20px] py-[20px]"
		>
			<Image src={serviceImagePath} alt="Google Logo" width={35} height={35} />

			<span className="pl-[7px]">Continue with {serviceName}</span>
		</button>
	);
};

export default CompleteActionWithService;
