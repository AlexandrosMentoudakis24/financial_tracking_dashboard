import { DetailInfosProps, SingleDetailInfos } from "./SingleDetailInfos";

const SingleDetailRow = ({
	detailInfos,
}: { detailInfos: DetailInfosProps[] }) => {
	return (
		<div className="w-full flex flex-row justify-stretch items-center">
			{detailInfos.map((info) => {
				return <SingleDetailInfos key={info.id} detailInfo={info} />;
			})}
		</div>
	);
};

export default SingleDetailRow;
