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
	const totalGridSum = `grid-cols-${availableOptions.length}`;

	const activeOptionButtonClass =
		"text-primary_color border-b-[2px] border-primary_color";
	const inActiveOptionButtonClass =
		"text-black border-b-[2px] border-transparent";

	return (
		<div className={`h-[75px] w-full grid ${totalGridSum}`}>
			{availableOptions.map((option, index) => (
				<button
					key={index}
					className={`
            grid place-items-center
            ${option === currentActiveOption ? activeOptionButtonClass : inActiveOptionButtonClass}
            text-[18px] font-bold tracking-[2px]
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
