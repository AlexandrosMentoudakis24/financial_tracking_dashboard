import RemoveAccountButton from "./RemoveAccountButton";
import EditDetailsButton from "./EditDetailsButton";
import SingleDetailRow from "./SingleDetailRow";
import GoBackButton from "./GoBackButton";

const AccountDetailsContainer = () => {
	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-row justify-between items-center mb-[10px]">
				<span className="overviewCardsTitleStyle">Account Details</span>
				<GoBackButton />
			</div>
			<div
				className="
        h-[250px] w-[750px]
        flex flex-col 
        justify-between items-center text-left 
        rounded-[5px] bg-white
        px-[35px] py-[20px] 
      "
			>
				<SingleDetailRow
					detailInfos={[
						{ id: "1", title: "Bank Name", info: "Eurobank" },
						{ id: "2", title: "Account Type", info: "Checkings" },
						{ id: "3", title: "Account Balance", info: "$25.000.000" },
					]}
				/>
				<SingleDetailRow
					detailInfos={[
						{
							id: "4",
							title: "Branch Name Name",
							info: "Lewforos 62 Martyrwn",
						},
						{ id: "5", title: "Account Number", info: "1234 **** **** 1234" },
					]}
				/>
				<div className="w-full flex flex-row justify-start items-center text-[18px]">
					<EditDetailsButton />
					<RemoveAccountButton />
				</div>
			</div>
		</div>
	);
};

export default AccountDetailsContainer;
