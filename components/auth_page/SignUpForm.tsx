"use client";

import AlternativeActionsContainer from "./AlternativeActionsContainer";
import CompleteAuthActionButton from "./CompleteAuthActionButton";
import SingleInputField from "./SingleInputField";

const SignUpForm = ({
	onAuthStateChangeButtonClickHandler,
}: {
	onAuthStateChangeButtonClickHandler: () => void;
}) => {
	return (
		<>
			<div className="text-[22px] font-bold tracking-[1px] pt-[45px]">
				Create Your Account
			</div>
			<div className="h-[550px] w-[430px] flex flex-col text-left text-black bg-white mt-[20px] px-[20px]">
				<div className="h-[48%] flex flex-col justify-between">
					<SingleInputField
						key={1}
						label={<>Full Name</>}
						placeholder="Enter your Full Name"
					/>
					<SingleInputField
						key={2}
						label={<>Email Address</>}
						placeholder="Enter valid Email..."
					/>
					<SingleInputField
						key={3}
						label={<>Password</>}
						placeholder="Enter valid Password"
						isPrivateField={true}
					/>
				</div>
				<div className="h-[16%] flex flex-col pt-[20px]">
					<div className="text-[14px] text-gray-600">
						By continuing, you agree on our{" "}
						<button className="text-primary_color">terms of service.</button>
					</div>
					<CompleteAuthActionButton btnText="Sign Up" btnAction={() => {}} />
				</div>
				<AlternativeActionsContainer text="Sign Up with" action={() => {}} />
				<div className="w-full justify-center items-center text-center text-[17px] text-gray-500 pt-[30px]">
					Already have an Account?{" "}
					<button
						className="text-primary_color font-bold"
						onClick={onAuthStateChangeButtonClickHandler}
					>
						Sign In here
					</button>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;
