"use client";

import { IoIosArrowDown } from "react-icons/io";
import SingleColoredBlockWithLabel from "./SingleColoredBlock";

const StatisticsContainerInfosRow = () => {
	return (
		<div className="h-full w-full flex flex-row justify-between items-center">
			<button
				className="
          flex flex-row 
          justify-start items-center text-left
          text-[18px] text-black font-bold
        "
				onClick={() => {
					alert("On Click function has not yet been implemented...");
				}}
			>
				<span>Weekly Comparison</span>
				<span className="text-[25px] ml-[7px]">
					<IoIosArrowDown />
				</span>
			</button>
			<div className="flex flex-row justify-end items-center text-right">
				<SingleColoredBlockWithLabel
					bgColor="bg-primary_color"
					label="This Week"
				/>
				<span className="ml-[40px]">
					<SingleColoredBlockWithLabel
						bgColor="bg-gray-300"
						label="Last Week"
					/>
				</span>
			</div>
		</div>
	);
};

export default StatisticsContainerInfosRow;
