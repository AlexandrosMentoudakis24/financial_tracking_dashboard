"use client";

import { MdOutlineDone } from "react-icons/md";

import AlternativeActionsContainer from "./auth_page/AlternativeActionsContainerr";
import CompleteAuthActionButton from "./auth_page/CompleteAuthActionButtonn";
import SingleInputField from "./auth_page/SingleInputFieldd";
import { useState } from "react";

const LoginForm = ({
	onAuthStateChangeButtonClickHandler,
	onPasswordResetButtonClickHandler,
}: {
	onAuthStateChangeButtonClickHandler: () => void;
	onPasswordResetButtonClickHandler: () => void;
}) => {
	const [rememberMe, setRememberMe] = useState<boolean>(false);

	const rememberMeBtnClass = rememberMe
		? "border-[2px] border-primary_color bg-primary_color"
		: "border-[2px] border-gray-400";

	return (
		<>
			<div className="text-[22px] font-bold tracking-[1px] pt-[45px]">
				Log Into Your Account
			</div>
			<div className="h-[430px] w-[430px] flex flex-col text-left text-black bg-white mt-[20px] px-[20px]">
				<div className="h-[65%] flex flex-col justify-between">
					<SingleInputField
						key={1}
						label={<div className="text-[20px]">Password</div>}
						placeholder="Enter valid Email..."
					/>
					<div className="flex flex-row justify-between items-center">
						<SingleInputField
							key={2}
							label={
								<div className="flex flex-row justify-between items-center text-[20px]">
									Password
									<button
										className="text-[15px] text-primary_color"
										onClick={onPasswordResetButtonClickHandler}
									>
										Forgot Password?
									</button>
								</div>
							}
							placeholder="Enter valid Password"
							isPrivateField={true}
						/>
					</div>
				</div>
				<div className="h-[21%] flex flex-col pt-[20px]">
					<div className="flex flex-row justify-start items-center text-[14px] text-gray-600">
						<button
							className={`h-[18px] w-[18px] flex justify-center items-center text-center ${rememberMeBtnClass}`}
							onClick={() => {
								setRememberMe((prevState) => !prevState);
							}}
						>
							{rememberMe && <MdOutlineDone size={20} color="white" />}
						</button>
						<span className="pl-[10px]">Remember me</span>
					</div>
					<CompleteAuthActionButton btnText="Login" btnAction={() => {}} />
				</div>
				<AlternativeActionsContainer text="Sign In with" action={() => {}} />
				<div className="w-full justify-center items-center text-center text-[17px] text-gray-500 pt-[30px]">
					<button
						className="text-primary_color font-bold"
						onClick={onAuthStateChangeButtonClickHandler}
					>
						Create an Account
					</button>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
