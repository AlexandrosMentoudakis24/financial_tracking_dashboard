import HomeProfileSection from "./HomeProfileSection";
import HomeSearchBar from "./SearchBar";

const HomeAppBarSection = ({
	userFirstName,
	currentDate,
}: { userFirstName: string; currentDate: string }) => {
	return (
		<div className="h-full w-full grid grid-cols-2 border-b-[1px] border-gray-400 px-[25px] py-[20px]">
			<HomeProfileSection userFName={userFirstName} currentDate={currentDate} />
			<HomeSearchBar />
		</div>
	);
};

export default HomeAppBarSection;
