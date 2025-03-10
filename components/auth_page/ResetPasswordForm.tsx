"use client";

import CompleteAuthActionButton from "./CompleteAuthActionButton";
import SingleInputField from "./SingleInputField";

const ResetPasswordForm = ({
	onAuthStateChangeButtonClickHandler,
}: {
	onAuthStateChangeButtonClickHandler: () => void;
}) => {
	return (
		<>
			<div className="text-[22px] font-bold tracking-[1px] pt-[45px]">
				Forgot Password?
			</div>
			<div className="h-[280px] w-[430px] flex flex-col justify-evenly items-center rounded-md text-left text-black bg-white mt-[20px] px-[20px] py-[10p]">
				<div className="w-full flex flex-col justify-evenly">
					<SingleInputField
						key={1}
						label={<>Email Address</>}
						placeholder="Enter Your Email..."
					/>
					<div className="w-full justify-center items-center text-center text-[17px] text-gray-500 pt-[30px]">
						<CompleteAuthActionButton
							btnText="Password Reset"
							btnAction={() => {}}
						/>
						<button
							className="text-gray-400 font-bold mt-[20px]"
							onClick={onAuthStateChangeButtonClickHandler}
						>
							Back to Login
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ResetPasswordForm;
