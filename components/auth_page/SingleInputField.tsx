"use client";

import { JSX, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

const SingleInputField = ({
	label,
	placeholder,
	isPrivateField,
}: {
	label: JSX.Element;
	placeholder: string;
	isPrivateField?: boolean | null | undefined;
}) => {
	const [isTextHidden, setIsTextHidden] = useState<boolean>(
		isPrivateField ?? false,
	);

	const inputType = isTextHidden ? "password" : "text";

	return (
		<div className="w-full flex flex-col text-left text-black ">
			<div className="w-full text-[20px]">{label}</div>
			<div className="relative h-[40px] w-full flex flex-row justify-start items-center">
				<input
					className="h-full w-full 
          flex flex-row justify-start items-center text-left
          rounded-[7px] border-gray-300 border-[2px] 
          text-[17px] tracking-[1px]
          p-[10px] pr-[40px] mt-[5px]"
					type={inputType}
					placeholder={placeholder}
				/>
				{isPrivateField && (
					<button
						className="absolute right-[10px] top-[9px]"
						onClick={() => {
							setIsTextHidden((prevState) => !prevState);
						}}
					>
						{<IoEyeOutline size={25} color="grey" />}
					</button>
				)}
			</div>
		</div>
	);
};

export default SingleInputField;
