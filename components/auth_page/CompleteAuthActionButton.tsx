const CompleteAuthActionButton = ({
	btnText,
	btnAction,
}: { btnText: string; btnAction: () => void }) => {
	return (
		<button
			className="h-[50px] w-full grid place-items-center text-white text-[20px] tracking-[2px] rounded-[5px] bg-primary_color mt-[7px]"
			onClick={btnAction}
		>
			{btnText}
		</button>
	);
};

export default CompleteAuthActionButton;
