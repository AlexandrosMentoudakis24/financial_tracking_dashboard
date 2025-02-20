"use client";

import { useState } from "react";

import IndexingContainer from "../indexing_container/IndexingContainer";
import SingleBankCard from "@/components/_global/SingleBankCard";

import { BankCard, CardType } from "@/models/bank_card";
import SingleOverviewCard from "../SingleOverviewCard";

const bankCards: BankCard[] = [
	new BankCard({
		id: "1",
		cardNumber: "1234876556782463",
		cardType: CardType["Credit"],
		cardPin: "1234",
		accountMoney: 135724,
	}),
	new BankCard({
		id: "2",
		cardNumber: "1234876556782463",
		cardType: CardType["Debit"],
		cardPin: "4321",
		accountMoney: 246835,
	}),
];

const SingleOverviewBanksInfoCard = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [currentCard, setCurrentCard] = useState<BankCard>(
		bankCards[currentIndex],
	);

	const changeCurrentIndex = (isNextStep: boolean) => {
		if (isNextStep) {
			setCurrentIndex((prevState) => prevState + 1);
		} else {
			setCurrentIndex((prevState) => prevState - 1);
		}

		setCurrentCard(bankCards[currentIndex]);
	};

	return (
		<SingleOverviewCard
			overviewCardProps={{
				cardTitleDiv: <>Total Balance</>,
				firstChildDiv: (
					<div className="h-full w-full flex flex-row justify-between items-center">
						<div className="text-[22px] text-black font-bold">$240.399</div>
						<button className="text-[16px] text-gray-800 tracking-[1px]">
							All Accounts
						</button>
					</div>
				),
				secondChildDiv: (
					<div className="h-full w-full flex flex-row justify-center items-center">
						<div className="w-[90%]">
							<SingleBankCard key={currentCard.id} bankCard={currentCard} />
						</div>
					</div>
				),
				thirdChildDiv: (
					<IndexingContainer
						currentIndex={currentIndex}
						maxNumber={bankCards.length}
						onIndexChangeHandler={changeCurrentIndex}
					/>
				),
			}}
		/>
	);
};

export default SingleOverviewBanksInfoCard;
