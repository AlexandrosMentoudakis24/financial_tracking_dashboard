import { JSX } from "react";

interface OverviewCardProps {
	cardTitleDiv: JSX.Element;
	firstChildDiv: JSX.Element;
	secondChildDiv: JSX.Element;
	thirdChildDiv: JSX.Element;
	firstChildSpan?: number;
	secondChildSpan?: number;
	thirdChildSpan?: number;
}

const SingleOverviewCard = ({
	overviewCardProps,
}: { overviewCardProps: OverviewCardProps }) => {
	const firstSpan = overviewCardProps.firstChildSpan ?? 1;
	const secondSpan = overviewCardProps.secondChildSpan ?? 3;
	const thirdSpan = overviewCardProps.thirdChildSpan ?? 1;

	const totalspan = firstSpan + secondSpan + thirdSpan;
	const totalRowsSpan = `grid-rows-${totalspan}`;

	return (
		<div className="h-full w-full flex flex-col justify-start items-center">
			<div className="h-[10%] w-full overviewCardsTitleStyle mb-[15px]">
				{overviewCardProps.cardTitleDiv}
			</div>
			<div
				className={`h-full w-full
          grid ${totalRowsSpan}
          rounded-[10px] 
          bg-white
          px-[15px] py-[10px]
        `}
			>
				<div className={`row-span-${firstSpan}`}>
					{overviewCardProps.firstChildDiv}
				</div>
				<div className={`row-span-${secondSpan}`}>
					{overviewCardProps.secondChildDiv}
				</div>
				<div className={`row-span-${thirdSpan}`}>
					{overviewCardProps.thirdChildDiv}
				</div>
			</div>
		</div>
	);
};

export default SingleOverviewCard;
