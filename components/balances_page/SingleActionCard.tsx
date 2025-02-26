const SingleActionCard = () => {
	return (
		<div className="h-[270px] w-[450px] flex flex-col justify-center items-center text-[20px] rounded-[7px] bg-white px-[20px] py-[15px]">
			<button className="text-white bg-primary_color hover:bg-opacity-80 hover:opacity-80 rounded-[5px] px-[20px] py-[10px] mb-[15px]">
				Add Account
			</button>
			<button className="text-gray-400">Edit Accounts</button>
		</div>
	);
};

export default SingleActionCard;
