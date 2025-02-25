import SingleActionCard from "./SingleActionCard";
import SingleBalanceCard from "./SingleBalanceCard";

const BalanceCardsContainer = () => {
	return (
		<div className="w-full flex-wrap flex flex-row justify-between gap-y-[50px]">
			<SingleActionCard />
			<SingleBalanceCard />
			<SingleBalanceCard />
			<SingleBalanceCard />
			<SingleBalanceCard />
			<SingleBalanceCard />
		</div>
	);
};

export default BalanceCardsContainer;
