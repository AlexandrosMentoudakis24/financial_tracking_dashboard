"use client";

import { useSearchParams } from "next/navigation";

import ChangeGoalInfosModal from "@/components/modals/ChangeGoalInfosModal";

export const changeGoalInfosModalParamKey = "changeGoalInfos";

export const ChangeGoalInfosContainer = () => {
	const searchParams = useSearchParams();

	const isParamEnabled =
		searchParams.get(changeGoalInfosModalParamKey) ?? false;

	return <>{isParamEnabled && <ChangeGoalInfosModal />}</>;
};
