"use client";

import LoginForm from "@/components/auth_page/LoginForm";
import ResetPasswordForm from "@/components/auth_page/ResetPasswordForm";
import { useSearchParams, useRouter } from "next/navigation";

const forgotPasswordParam = "forgotPassword";

const LoginPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const isForgotPasswordFlagSet =
		searchParams.get(forgotPasswordParam)?.toString().toLowerCase() === "true";

	var displayedAuthForm = (
		<LoginForm
			onAuthStateChangeButtonClickHandler={() => {
				router.push("./signup");
			}}
			onPasswordResetButtonClickHandler={() => {
				const params = new URLSearchParams(searchParams.toString());

				params.set(forgotPasswordParam, "true");

				router.push(`?${params.toString()}`);
			}}
		/>
	);

	if (isForgotPasswordFlagSet) {
		displayedAuthForm = (
			<ResetPasswordForm
				onAuthStateChangeButtonClickHandler={() => {
					const params = new URLSearchParams(searchParams.toString());

					params.delete(forgotPasswordParam);

					router.push(`?${params.toString()}`);
				}}
			/>
		);
	}

	return (
		<div className="h-screen w-screen flex flex-col justify-center items-center text-center">
			<div className="text-primary_color text-[25px] font-bold tracking-[1px]">
				Expense Tracking Dashboard
			</div>
			{displayedAuthForm}
		</div>
	);
};

export default LoginPage;
