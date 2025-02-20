"use client";

const AlternativeActionsContainer = ({
	text,
	action,
}: { text: string; action: () => void }) => {
	return (
		<div className="w-full flex flex-col">
			<div className="w-full flex flex-row justify-center items-center px-[25px]">
				<div className="h-[2px] w-[30%] bg-gray-300 rounded-full my-[40px]" />
				<div className="text-gray-500 text-[15px] px-[10px]"></div>
				{text}
				<div className="h-[2px] w-[30%] bg-gray-300 rounded-full my-[30px]" />
			</div>
			<CompleteActionWithService
				serviceName="Google"
				serviceImagePath="/assets/images/google_icon.png"
				onButtonClickHandler={action}
			/>
		</div>
	);
};

export default AlternativeActionsContainer;
