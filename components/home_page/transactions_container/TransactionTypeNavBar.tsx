export const availableContentTypes = Object.freeze({
	All: "All",
	Expenses: "Expenses",
	Revenue: "Revenue",
} as const);

export type TransactionNavBarType =
	(typeof availableContentTypes)[keyof typeof availableContentTypes];

export const TransactionTypeNavBar = ({
	availableOptions,
	currentActiveOption,
	onOptionButtonClickedHandler,
}: {
	availableOptions: string[];
	currentActiveOption: string;
	onOptionButtonClickedHandler: (newOption: string) => void;
}) => {
	const activeOptionButtonClass =
		"text-primary_color border-b-[2px] border-primary_color";
	const inActiveOptionButtonClass =
		"text-black border-b-[2px] border-transparent";

	return (
		<div className="h-[55px] w-full flex flex-row justify-evenly items-center">
			{availableOptions.map((option, index) => (
				<button
					key={index}
					className={`
            ${option === currentActiveOption ? activeOptionButtonClass : inActiveOptionButtonClass}
            h-full
            text-[20px] font-bold tracking-[2px]
            px-[10px]
          `}
					onClick={() => {
						onOptionButtonClickedHandler(option);
					}}
				>
					{option}
				</button>
			))}
		</div>
	);
};
