import { CgMoreVerticalAlt } from "react-icons/cg";

const LogoutContainer = () => {
	return (
		<div
			className="
        h-full w-full 
        flex flex-col 
        justify-start 
      "
		>
			<button
				className="
          w-full 
          tracking-[2px] 
          bg-logout_btn_bg_color 
          rounded-[10px]
          py-[12px] 
        "
			>
				Logout
			</button>
			<div
				className="
          flex flex-col
          border-t-[3px] border-gray-700
          pt-[30px]
          mt-[50px]
        "
			>
				<div className="w-full flex flex-row justify-between items-center text-center">
					<div className="flex flex-col justify-start items-start text-center">
						<div className="text-[18px] text-white font-bold">
							Alexandros Mentoudakis
						</div>
						<button className="text-[16px] text-gray-300 tracking-[2px]">
							View Profile
						</button>
					</div>
					<button>
						<CgMoreVerticalAlt size={28} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogoutContainer;
