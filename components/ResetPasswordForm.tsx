"use client";

import CompleteAuthActionButton from "../CompleteAuthActionButtontionButton";
import SingleInputField from "../SingleInputFieldInputField";

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
			<div className="h-[280px] w-[430px] flex flex-col text-left text-black bg-white mt-[20px] px-[20px]">
				<div className="h-[30%] flex flex-col justify-between">
					<SingleInputField
						key={1}
						label={<>Email Address</>}
						placeholder="Enter Your Email..."
					/>
				</div>
				<div className="h-[26%] flex flex-col pt-[20px]">
					<CompleteAuthActionButton
						btnText="Password Reset"
						btnAction={() => {}}
					/>
				</div>
				<div className="w-full justify-center items-center text-center text-[17px] text-gray-500 pt-[30px]">
					<button
						className="text-gray-400 font-bold"
						onClick={onAuthStateChangeButtonClickHandler}
					>
						Back to Login
					</button>
				</div>
			</div>
		</>
	);
};

export default ResetPasswordForm;
