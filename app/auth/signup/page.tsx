"use client";

import SignUpForm from "@/components/auth_page/SignUpForm";
import { useRouter } from "next/navigation";

const SignUpScreen = () => {
	const router = useRouter();

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center text-center">
			<div className="text-primary_color text-[25px] font-bold tracking-[1px]">
				Expense Tracking Dashboard
			</div>
			<SignUpForm
				onAuthStateChangeButtonClickHandler={() => {
					router.push("./login");
				}}
			/>
		</div>
	);
};

export default SignUpScreen;
