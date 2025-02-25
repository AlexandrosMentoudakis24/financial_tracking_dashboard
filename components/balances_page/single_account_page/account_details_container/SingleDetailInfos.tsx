export interface DetailInfosProps {
	id: string;
	title: string;
	info: string;
}

export const SingleDetailInfos = ({
	detailInfo,
}: { detailInfo: DetailInfosProps }) => {
	return (
		<div className="flex flex-col justify-start items-start">
			<span className="text-[16px] text-gray-500">{detailInfo.title}</span>
			<span className="text-[20px] text-black font-bold">
				{detailInfo.info}
			</span>
		</div>
	);
};
