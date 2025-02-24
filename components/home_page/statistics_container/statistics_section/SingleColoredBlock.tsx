const SingleColoredBlockWithLabel = ({
	bgColor,
	label,
}: { bgColor: string; label: string }) => {
	return (
		<div className="flex flex-row justify-end items-center text-right">
			<div
				className={`
        ${bgColor} 
        h-[12px] w-[25px] 
        rounded-[2px]
      `}
			/>
			<span className="text-[16px] text-gray-700 tracking-[1px] ml-[7px]">
				{label}
			</span>
		</div>
	);
};

export default SingleColoredBlockWithLabel;
