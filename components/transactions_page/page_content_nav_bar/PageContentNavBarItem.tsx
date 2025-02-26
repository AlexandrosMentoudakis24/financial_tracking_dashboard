const PageContentNavBarItem = ({
	title,
	isActive,
	onItemClickHandler,
}: {
	title: string;
	isActive: boolean;
	onItemClickHandler: (newContentTitle: string) => void;
}) => {
	const activeItemStyle = `
    text-primary_color border-primary_color
  `;

	return (
		<div className="text-[20px] tracking-[1px] font-bold text-black">
			<button
				className={`border-b-[2px] px-[10px] py-[3px] ${isActive && activeItemStyle}`}
				onClick={() => {
					if (isActive) return;

					onItemClickHandler(title);
				}}
			>
				{title}
			</button>
		</div>
	);
};

export default PageContentNavBarItem;
