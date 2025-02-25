import { IoClose } from "react-icons/io5";

import { useRouter } from "next/navigation";
import SingleInputField from "../auth_page/SingleInputField";

const ChangeGoalInfosModal = () => {
	const router = useRouter();

	return (
		<div
			className="
        fixed inset-0 
        flex justify-center items-center
        h-screen w-screen 
        z-50 
        bg-gray-400 bg-opacity-30
      "
		>
			<div className="h-[330px] w-[470px] flex flex-col rounded-[10px] bg-white opacity-100 px-[10px] py-[5px]">
				<div className="w-full flex flex-row justify-end items-center">
					<button
						className="hover:text-gray-500"
						onClick={() => {
							router.back();
						}}
					>
						<IoClose size={35} />
					</button>
				</div>
				<div className="flex-grow grid grid-rows-5 px-[25px] pt-[10px] pb-[15px]">
					<div className="row-span-2 h-full w-full">
						<SingleInputField
							label={
								<div className="text-[18px] text-black mb-[5px]">
									Target Amount
								</div>
							}
							placeholder="$500000"
						/>
					</div>
					<div className="row-span-2 h-full w-full">
						<SingleInputField
							label={
								<div className="text-[18px] text-black mb-[5px]">
									Present Amount
								</div>
							}
							placeholder="Write the amount you currently have."
						/>
					</div>
					<div className="row-span-1 h-full grid place-items-center w-full">
						<button
							className="h-[90%] w-[50%] text-[20px] text-white tracking-[1px] font-bold rounded-[5px] bg-primary_color hover:bg-opacity-80"
							onClick={() => {
								alert("On Click function has not yet been implemented...");
							}}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeGoalInfosModal;
