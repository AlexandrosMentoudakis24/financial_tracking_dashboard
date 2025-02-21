"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { JSX } from "react";

import SingleIndexDot from "./SingleIndexDot";

const IndexingContainer = ({
	currentIndex,
	maxNumber,
	onIndexChangeHandler,
}: {
	currentIndex: number;
	maxNumber: number;
	onIndexChangeHandler: (isNextStep: boolean) => void;
}) => {
	var dotElements: JSX.Element[] = [];

	for (let index = 0; index < maxNumber; index++) {
		const element = (
			<SingleIndexDot key={index} isActive={index == currentIndex} />
		);

		dotElements.push(element);
	}

	const hasNext = currentIndex + 1 < maxNumber;
	const hasPrev = currentIndex > 0;

	return (
		<div className="w-full flex flex-row justify-between items-center text-[16px] text-gray-500 mt-[25px]">
			<button
				className={`
          flex flex-row justify-start items-center text-left 
          ${hasPrev ? "text-black" : "cursor-not-allowed"} 
        `}
				onClick={() => {
					if (!hasPrev) return;

					onIndexChangeHandler(false);
				}}
			>
				<IoIosArrowBack size={20} className="mr-[3px]" />
				Previous
			</button>
			<div className="flex flex-row justify-center items-center gap-x-[15px]">
				{...dotElements}
			</div>
			<button
				className={`
          flex flex-row justify-end items-center text-right 
          ${hasNext ? "text-black" : "cursor-not-allowed"} 
        `}
				onClick={() => {
					if (!hasNext) return;

					onIndexChangeHandler(true);
				}}
			>
				Next
				<IoIosArrowForward size={20} className="ml-[3px]" />
			</button>
		</div>
	);
};

export default IndexingContainer;
