import { IoMdNotifications } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const HomeSearchBar = () => {
	return (
		<div className="h-full flex flex-row justify-end items-center bg-transparent">
			<button className="mr-[30px]">
				<IoMdNotifications size={28} />
			</button>
			<div
				className="
        h-full w-[40%]
        flex flex-row items-center
        border-[1px] border-gray-400 
        rounded-[10px]
        px-[10px] py-[6px]"
			>
				<input
					className="h-full w-[90%]
        text-left text-[16px] tracking-[1px] 
        focus:outline-none
        rounded-[10px] bg-transparent
        pr-[5px] pt-[5px] pb-[4px]"
					placeholder="Search here..."
				/>
				<IoSearchOutline size={28} />
			</div>
		</div>
	);
};

export default HomeSearchBar;
