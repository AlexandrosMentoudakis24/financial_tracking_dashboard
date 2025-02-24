import SideNavBarLinksContainer from "./links_section/SideNavBarLinksContainer";

const SideNavigationBar = () => {
	return (
		<div
			className="
        h-full w-full 
        flex flex-col 
        items-center text-center 
        text-white 
        px-[15px] py-[30px] 
      "
		>
			<div className="h-[7%] w-full text-[23px] text-white font-bold">
				Financial Track.IO
			</div>
			<div
				className="
          h-[70%] w-[90%] 
          flex flex-col 
          gap-y-[20px]
          my-[30px]
        "
			>
				<SideNavBarLinksContainer />
			</div>
			<div className="h-[23%] w-full bg-blue-500">Overview</div>
		</div>
	);
};

export default SideNavigationBar;
